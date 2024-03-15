import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
  nombreReceta:{
    type: String,
    required:true,
    unique:true,
    minLength:10,
    maxLength:50
  },
  descripcionBreve:{
    type: String,
    required: true,
    minLength: 10,
    maxLength: 85
  },
  descripcionAmplia:{
    type: String,
    required: true,
    minLength: 50,
    maxLength: 500
  },
  ingredientes:{
    type: String,
    required: true,
    minLength: 10,
    maxLength: 300,
    validate: {
      validator: function(v) {
        return /.+?[^,],.+/.test(v);
      },
      message: props => `Los ingredientes deben ser ingresados separados por coma`
    }
  },
  preparacion:{
    type: String,
    required: true,
    minLength: 10,
    maxLength: 800,
    validate: {
      validator: function(v) {
        return /[^\.].+?\./.test(v);
      },
      message: props => `Los pasos de la preparación deben ser ingresados separados por punto seguido`
    }
  },
  autor:{
    type: String,
    required: true,
    minLength: 8,
    maxLength: 50
  },
  fecha:{
    type: Date,
    required: true
  },
  imagen:{
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(v);
      },
      message: props => `Debe ingresar una URL válida (jpg|jpeg|gif|png)`
    }
  }
})

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;