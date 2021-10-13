import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Receta() {
  const router = useRouter();
  const { id } = router.query;
  const [receta, datosReceta] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const key = "0f153e57d0cc4f00b0543e7d31f9d282";
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}&includeNutrition=false`;
      const resultado = await axios.get(url);
      datosReceta(resultado);
    };
    consultarAPI();
    console.log(receta);
  }, []);

  return <p>lol</p>;
}
