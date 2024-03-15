import { Router } from "express";
import { crearReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers.js";

const enrutador = new Router();

enrutador.route("/recetas").get(listarRecetas).post(crearReceta);
enrutador.route("/receta/:id").get(obtenerReceta);

export default enrutador;