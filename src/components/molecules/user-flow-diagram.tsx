import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ReactFlow,
  Node,
  Edge,
  Handle,
  Position,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import '@xyflow/react/dist/style.css';

export type NodeType = 'action' | 'system' | 'result';

export interface FlowNode {
  label: string;
  type: NodeType;
  highlight?: boolean;
  preview?: {
    gif?: string;
    description?: string;
  };
}

export interface UserFlowDiagramProps {
  start: string;
  paths: FlowNode[][];
  convergence: string;
  delay?: number;
}

const nodeStyles: Record<NodeType, string> = {
  action: 'bg-background border-border text-foreground hover:border-foreground',
  system: 'bg-muted border-border text-muted-foreground italic hover:border-foreground',
  result: 'bg-foreground border-foreground text-background',
};

function FlowNodeComponent({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasPreview = !!data.preview;

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as globalThis.Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <Handle type="target" position={data.targetPos} className="!bg-border !border-border !w-2 !h-2" />
      <div
        className={`flex items-center justify-center px-3 py-3 rounded-sm border text-[11px] leading-[1.4] text-center w-36 min-h-[52px] select-none transition-all duration-500
          ${nodeStyles[data.type as NodeType]}
          ${data.highlight ? 'ring-2 ring-foreground/20 ring-offset-2' : ''}
          ${hasPreview ? 'cursor-pointer focus-ring' : ''}
        `}
        onPointerEnter={() => hasPreview && setOpen(true)}
        onPointerLeave={() => hasPreview && setOpen(false)}
        onClick={() => hasPreview && setOpen(v => !v)}
      >
        {data.label}
        {hasPreview && (
          <div className="absolute top-1 right-1.5 flex gap-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-pulse" />
          </div>
        )}
      </div>
      <Handle type="source" position={data.sourcePos} className="!bg-border !border-border !w-2 !h-2" />

      <AnimatePresence>
        {open && data.preview && (
          <motion.div
            className="absolute z-50 bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-64 bg-background border border-border rounded-sm p-3 shadow-xl pointer-events-none"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {data.preview.gif && (
              <div className="w-full h-32 bg-muted rounded-sm mb-3 overflow-hidden border border-border/10">
                <img src={data.preview.gif} alt={data.label} className="w-full h-full object-cover" />
              </div>
            )}
            {data.preview.description && (
              <p className="text-[11px] leading-[1.6] text-muted-foreground text-pretty">
                {data.preview.description}
              </p>
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[5px] w-2.5 h-2.5 bg-background border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const nodeTypes = { flowNode: FlowNodeComponent };

function buildGraph(start: string, paths: FlowNode[][], convergence: string, isMobile: boolean) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  const NODE_W = 144;
  const NODE_H = 52;
  const GAP_X = isMobile ? 60 : 80;
  const GAP_Y = isMobile ? 80 : 100;

  const sourcePos = isMobile ? Position.Bottom : Position.Right;
  const targetPos = isMobile ? Position.Top : Position.Left;

  nodes.push({
    id: 'start',
    type: 'flowNode',
    position: { x: 0, y: 0 },
    data: { label: start, type: 'action', isMobile, sourcePos, targetPos },
  });

  paths.forEach((path, pi) => {
    path.forEach((node, ni) => {
      const id = `p${pi}-n${ni}`;
      const posX = (ni + 1) * (NODE_W + GAP_X);
      const posY = (pi - (paths.length - 1) / 2) * GAP_Y;

      nodes.push({
        id,
        type: 'flowNode',
        position: { x: posX, y: posY },
        data: { ...node, isMobile, sourcePos, targetPos },
      });

      if (ni === 0) {
        edges.push({ id: `start-${id}`, source: 'start', target: id, type: 'smoothstep', style: { stroke: 'hsl(var(--border))' } });
      } else {
        edges.push({ id: `p${pi}-n${ni-1}-${id}`, source: `p${pi}-n${ni-1}`, target: id, type: 'smoothstep', style: { stroke: 'hsl(var(--border))' } });
      }
    });
  });

  const maxPathLen = Math.max(...paths.map(p => p.length));
  const convX = (maxPathLen + 1) * (NODE_W + GAP_X);
  
  nodes.push({
    id: 'convergence',
    type: 'flowNode',
    position: { x: convX, y: 0 },
    data: { label: convergence, type: 'action', highlight: true, isMobile, sourcePos, targetPos },
  });

  paths.forEach((path, pi) => {
    const lastId = `p${pi}-n${path.length - 1}`;
    edges.push({ id: `${lastId}-conv`, source: lastId, target: 'convergence', type: 'smoothstep', style: { stroke: 'hsl(var(--border))' } });
  });

  return { nodes, edges };
}

export default function UserFlowDiagram({ start, paths, convergence, delay = 0 }: UserFlowDiagramProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { nodes: initialNodes, edges: initialEdges } = buildGraph(start, paths, convergence, isMobile);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  if (!mounted) return null;

  return (
    <motion.div
      className="w-full rounded-sm border border-border bg-muted/20 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-center mb-6">
        <span className="text-[12px] uppercase tracking-widest text-muted-foreground block font-bold">Fluxo do usuário</span>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider">
          <MagnifyingGlassIcon size={14} weight="bold" />
          <span>Arraste para navegar • Use o scroll para zoom</span>
        </div>
      </div>

      <div className="w-full h-[500px] rounded-sm overflow-hidden bg-background/50 border border-border/50">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={true}
          zoomOnScroll={true}
          panOnScroll={false}
          zoomOnPinch={true}
          maxZoom={1.5}
          minZoom={0.5}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="hsl(var(--border))" gap={24} size={1} />
        </ReactFlow>
      </div>
    </motion.div>
  );
}