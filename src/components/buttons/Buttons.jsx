/*1. Plaats drie buttons op de pagina, omwikkeld door een `nav`-element. Als je op de buttons klikt, moet de buttontekst in de console verschijnen. De laatste van de drie is disabled.
2. Maak nu een custom `Button`-component die alle benodigde data kan ontvangen, zodat hij voor alle drie de huidige uitvoeringen te gebruiken is. Vervang de huidige buttons door jouw
custom component en geef de juiste informatie mee.*/
//Pseudo code:
//1. typ: import React from "react";
//2. typ: import styles from "./Buttons.module.css";
//3. schrijf een functie: rsf > tab en zorg ervoor dat je hem export (export default Buttons;)
//4. schrijf een nav-element;
//5. schrijf button elementen;
//6. geef je nav-element een className, die ga je gebruiken in css voor de styling;
//7. dynamisch injecteren van de nav-element en 3 buttons, door ze in {} te plaatsen en door ze in de functie in { ..., ..., ...} te plaatsen
//8. de derde button-element moet disabled worden, plaatst disabled = {true} in de button-openingstag.

import React from 'react';
import styles from './Buttons.module.css'


function Buttons({button, buttonCollection, buttonShop, buttonPrice, disabled, buttonPreorder}) {
    return (
        <>
            <nav className={button}>
                <button> {buttonCollection} </button>
                <button> {buttonShop} </button>
                <button disabled={true}> {buttonPreorder} </button>
            </nav>
        </>

    );
}

export default Buttons;

