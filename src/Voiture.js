import React, { useState } from 'react'
import data from './data.js';
import {Cardvoiture} from './Cardvoiture';

export const Voiture = (listes) => {
    const [liste, setListe] = useState(data);
  return (
    <div>
        <table>
        <tr>
          <td>id</td>
          <td>nom</td>
          <td>marque</td>
          <td>numero</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Vam</td>
            <td>Audi</td>
            <td>987TBE</td>  
        </tr>
        
      </table>
 {
     liste.map((donner) => {
        <Cardvoiture donner={listes} />
    })
        }  

    </div>
  )
}
