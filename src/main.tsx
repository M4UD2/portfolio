import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// CORREÇÃO: Importando o globals.css que está na pasta styles
import "./styles/globals.css"; 

createRoot(document.getElementById("root")!).render(<App />);
