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
import styles from "../buttons/Buttons.module.css";


function Buttons({buttonCollection, buttonShop, buttonPrice, disabled, buttonPreorder}) {
    return (
        <>
            <nav className={styles.button}>
                <button> {buttonCollection} </button>
                <button> {buttonShop} </button>
                <button disabled={true}> {buttonPreorder} </button>
            </nav>
        </>

    );
}

export default Buttons;

