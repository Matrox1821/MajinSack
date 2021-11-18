import "./Datos.css";
import { Card } from "../../../ui/Card/Card";
import { axios } from "axios";
export const Datos = () => {
  const URI = "/obtener_datos_gps";
  const peticion = axios.get;
  peticion(URI)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    .then((res) => console.log(res.tiempo));

  return (
    <div className="content-cards">
      <Card Description="En este panel podrá observar la ubicación de la muchila."></Card>
      <Card
        Title="Detección de agua"
        Description="En este otro panel podrá obserbar si la mochila está mojada o no."
      ></Card>
    </div>
  );
};
