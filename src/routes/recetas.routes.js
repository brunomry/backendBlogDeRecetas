import { Router } from "express";
import { listarRecetas } from "../controllers/recetas.controllers.js";

const enrutador = new Router();

enrutador.route("/recetas").get(listarRecetas);

export default enrutador;