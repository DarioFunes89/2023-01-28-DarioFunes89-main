/* 8️⃣ ***COMPONENTE BANDDETAIL*** 8️⃣

Implementar el componente BandDetail. En este ejercicio tendrás que renderizar las diferentes propiedades 
de la banda.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" de la banda cuando se monta el componente. Luego, traer esa 
información de tu estado global.

🟢 Tendrás que renderizar algunos datos de la banda correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗Tienes que usar hooks.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      -'React.useState' - 'React.useEffect';
*/

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";

const BandDetail = (props) => {
      const dispatch = useDispatch();
      const band = useSelector(state => state.bands.find(band => band.id === props.match.params.id));
      React.useEffect(() => {
            dispatch(actions.getBandDetail(props.match.params.id));
      }, [dispatch, props.match.params.id]);

      return (
            <div>
                  <h1>{band.name}</h1>
                  <img src={band.image} alt={band.name} />
                  <h5>Entradas disponibles: {band.tickets}</h5>
                  <h5>Fecha del evento: {band.functionDate}</h5>
                  <h5>Origen de la banda: {band.origin}</h5>
                  <h5>Integrantes: {
                        band.members.map((member, index) => {
                              return <span key={index}>{member} </span>
                        })
                  }</h5>
                  <h3>{band.description}</h3>
            </div>
      )
};

export default BandDetail;