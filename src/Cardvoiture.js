import React, { useState } from 'react'
import data from './data.js';

export const Cardvoiture = (listes) => {
    const [liste,setListe] = useState(data);
    const {id,nom,marque,numero}= listes;
  return (
    <div>
        
 
        <tr>
            <td>{listes.id}</td>
            <td>{listes.nom}</td>
            <td>{listes.marque}</td>
            <td>{listes.numero}</td>
        </tr>
    </div>
  )
}
export default Cardvoiture;