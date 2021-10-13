import axios from "axios";
import { useState, useEffect } from "react";
import Plato from "./Plato";
const ListadoPlatos = () => {
  const [listado, actualizarListado] = useState([]);
  useEffect(() => {
    const consultarAPI = async () => {
      const key = "0f153e57d0cc4f00b0543e7d31f9d282";
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=20`;
      const resultado = await axios.get(url);
      actualizarListado(resultado.data.results);
    };
    consultarAPI();
  }, []);
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        {listado.map((platos) => (
          <Plato key={platos.id} platos={platos} />
        ))}
      </div>
    </div>
  );
};

export default ListadoPlatos;
