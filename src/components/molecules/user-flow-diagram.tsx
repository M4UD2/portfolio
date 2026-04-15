import { useState, useRef, useEffect, useCallback } from 'react';
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

// Custom node component
function FlowNodeComponent({ data }: { data: { label: string; type: NodeType; highlight?: boolean; preview?: FlowNode['preview']; isMobile: boolean } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasPreview = !!data.preview;

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as globalThis.Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <Handle type="target" position={Position.Left} className="!bg-border !border-border !w-2 !h-2" />
      <div
        className={`flex items-center justify-center px-3 py-3 rounded-sm border text-[11px] leading-[1.4] text-center w-36 min-h-[52px] select-none transition-colors duration-500
          ${nodeStyles[data.type]}
          ${data.highlight ? 'ring-2 ring-foreground/20 ring-offset-2' : ''}
          ${hasPreview ? 'cursor-pointer' : ''}
        `}
        onClick={() => data.isMobile && hasPreview && setOpen(v => !v)}
        onMouseEnter={() => !data.isMobile && hasPreview && setOpen(true)}
        onMouseLeave={() => !data.isMobile && hasPreview && setOpen(false)}
      >
        {data.label}
        {hasPreview && <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30" />}
      </div>
      <Handle type="source" position={Position.Right} className="!bg-border !border-border !w-2 !h-2" />

      <AnimatePresence>
        {open && data.preview && (
          <motion.div
            className="absolute z-50 bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-56 bg-background border border-border rounded-sm p-3 flex flex-col gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {data.preview.gif && (
              <img src={data.preview.gif} alt={data.label} className="w-full rounded-sm object-cover h-[80px]" />
            )}
            {data.preview.description && (
              <p className="text-[11px] leading-[1.5] text-muted-foreground">{data.preview.description}</p>
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[5px] w-2.5 h-2.5 bg-background border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const nodeTypes = { flowNode: FlowNodeComponent };

const NODE_W = 144;
const NODE_H = 52;
const COL_GAP = 60;
const ROW_GAP = 80;

function buildGraph(start: string, paths: FlowNode[][], convergence: string, isMobile: boolean) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const edgeStyle = { stroke: 'hsl(var(--border))', strokeWidth: 1 };
  const edgeProps = { style: edgeStyle, type: 'smoothstep' as const, animated: false };

  // Start node — centered vertically between paths
  const totalHeight = (paths.length - 1) * ROW_GAP;
  const startY = totalHeight / 2;

  nodes.push({
    id: 'start',
    type: 'flowNode',
    position: { x: 0, y: startY },
    data: { label: start, type: 'action', isMobile },
  });

  // Path nodes
  paths.forEach((path, pi) => {
    const y = pi * ROW_GAP;

    path.forEach((node, ni) => {
      const id = `p${pi}-n${ni}`;
      const x = NODE_W + COL_GAP + ni * (NODE_W + COL_GAP);

      nodes.push({
        id,
        type: 'flowNode',
        position: { x, y },
        data: { ...node, isMobile },
      });

      // Edge from start to first node of each path
      if (ni === 0) {
        edges.push({ id: `start-${id}`, source: 'start', target: id, ...edgeProps });
      } else {
        const prevId = `p${pi}-n${ni - 1}`;
        edges.push({ id: `${prevId}-${id}`, source: prevId, target: id, ...edgeProps });
      }
    });
  });

  // Convergence node — centered vertically, after the longest path
  const maxPathLen = Math.max(...paths.map(p => p.length));
  const convX = NODE_W + COL_GAP + maxPathLen * (NODE_W + COL_GAP);
  const convY = totalHeight / 2;

  nodes.push({
    id: 'convergence',
    type: 'flowNode',
    position: { x: convX, y: convY },
    data: { label: convergence, type: 'action', highlight: true, isMobile },
  });

  // Edges from last node of each path to convergence
  paths.forEach((path, pi) => {
    const lastId = `p${pi}-n${path.length - 1}`;
    edges.push({ id: `${lastId}-conv`, source: lastId, target: 'convergence', ...edgeProps });
  });

  // Canvas size
  const width = convX + NODE_W + 40;
  const height = totalHeight + NODE_H + 40;

  return { nodes, edges, width, height };
}

export default function UserFlowDiagram({ start, paths, convergence, delay = 0 }: UserFlowDiagramProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { nodes: initialNodes, edges: initialEdges, width, height } = buildGraph(start, paths, convergence, isMobile);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <motion.div
      className="w-full rounded-sm border border-border bg-muted/20 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <span className="text-[12px] uppercase tracking-widest text-muted-foreground block mb-4">Fluxo do usuário</span>

      <div style={{ height: height + 80 }} className="w-full rounded-sm overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="hsl(var(--border))" gap={24} size={1} />
        </ReactFlow>
      </div>
    </motion.div>
  );
}
