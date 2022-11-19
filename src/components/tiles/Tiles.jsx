//Pseudo code:
//1. typ: import React from "react";
//2. typ: import styles from './Tiles.module.css';
//3. schrijf een functie: rsf > tab en zorg ervoor dat je hem export (export default Buttons;)
//4. schrijf een footer-element;
//5. schrijf een section-element, geef deze een className, die ga je gebruiken in css voor de styling;
//6. schrijf een h2, p en img. Later heb je voor de p dummy tekst nodig, gebruik <p> lorem > tab om de dummytekst te genereren.
//7. dynamisch injecteren van de h2, p en img, door ze in {} te plaatsen en door ze in de functie in { ..., ..., ...} te plaatsen.

import React from 'react';
import styles from './Tiles.module.css'

function Tiles({tileTitle, tileTekst, tileImage, altTekst}) {
    return (
        <>
            <footer>
                <section className={styles.tile}>
                    <h2>{tileTitle}</h2>
                    <p>{tileTekst}</p>
                    <img src={tileImage} alt={altTekst}/>
                </section>
            </footer>
        </>
    );
}

export default Tiles;
