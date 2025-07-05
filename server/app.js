import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/users.js";
import countryRoutes from "./routes/countries.js";


const app = express();

app.use(cors());
app.use(express.json());

// rotas da API
app.use("/api/users", userRoutes);
app.use("/api/countries", countryRoutes);

// servir React build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

export default app;
