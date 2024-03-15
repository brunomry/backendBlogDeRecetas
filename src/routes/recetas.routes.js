import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers.js";

const enrutador = new Router();

enrutador.route("/recetas").get(listarRecetas).post(crearReceta);
enrutador.route("/receta/:id").get(obtenerReceta).put(editarReceta).delete(borrarReceta);

export default enrutador;