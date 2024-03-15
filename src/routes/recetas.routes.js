import { Router } from "express";
import { crearReceta, listarRecetas } from "../controllers/recetas.controllers.js";

const enrutador = new Router();

enrutador.route("/recetas").get(listarRecetas).post(crearReceta);

export default enrutador;