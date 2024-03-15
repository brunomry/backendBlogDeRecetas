import { Router } from "express";
import { crearReceta, editarReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers.js";

const enrutador = new Router();

enrutador.route("/recetas").get(listarRecetas).post(crearReceta);
enrutador.route("/receta/:id").get(obtenerReceta).put(editarReceta);

export default enrutador;