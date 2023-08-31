import roteadorUsuario from "./routes/usuario.js";
import dotenv from "dotenv";
import express from "express";      
dotenv.config();

const app = express();              
const port = 3000;                  

app.use(express.json());
app.use(roteadorUsuario);

app.get("/", (req, res) => {        
  res.json({
    nome: "Pedro Henrique Santos e Ferreira",      
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});