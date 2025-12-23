import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Coffee, Trophy, Briefcase, Mail, Linkedin } from 'lucide-react';
// CORREÇÃO: Importando com o nome exato do arquivo que você tem hoje
import imgProfile from "../assets/5f6ebe676a5141fd55f82268d568797104511a79.png"; 

export default function About() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          <motion.div 
            className="w-full max-w-[280px] md:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square relative rounded-full overflow-hidden border-2 border-transparent hover:border-black transition-all">
               <img 
                alt="Foto de Lívia Miranda" 
                className="w-full h-full object-cover" 
                src={imgProfile} 
              />
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-mono font-bold text-3xl md:text-4xl mb-4 text-center md:text-left text-foreground">
                Oi, eu sou a Lívia! 👋
              </h1>
              <p className="font-mono text-base md:text-lg opacity-80 text-center md:text-left text-muted-foreground">
                Product Designer apaixonada por inovação, IA e boas conversas.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
              {[
                { icon: Briefcase, value: '3+', label: 'Anos exp.' },
                { icon: Trophy, value: '15+', label: 'Projetos' },
                { icon: Coffee, value: '∞', label: 'Cafés' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-foreground">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  <p className="font-mono font-bold text-xl md:text-2xl">{stat.value}</p>
                  <p className="font-mono text-xs text-center">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="font-mono text-sm md:text-base flex flex-col gap-6 text-justify md:text-left text-foreground">
              <p>
                Sou <strong>publicitária de formação</strong> e migrei para o design de produto digital. 
                Hoje combino minha visão estética com dados, cursando um <strong>MBA em Inteligência Artificial</strong>.
              </p>
              <p>
                No tempo livre, sou gamer dedicada 🎮, leitora e fotógrafa amadora. Acredito que a tecnologia deve servir às pessoas, e não o contrário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="mailto:contato@liviamiranda.com" className="flex items-center justify-center gap-2 border-2 border-black px-6 py-3 font-mono font-bold text-foreground hover:bg-black hover:text-white transition-all">
                <Mail size={18} /> Enviar Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border-2 border-black px-6 py-3 font-mono font-bold text-foreground hover:bg-black hover:text-white transition-all">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
