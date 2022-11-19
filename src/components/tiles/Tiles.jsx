import React from 'react';
import styles from './Tiles.module.css'

/*Geen idee waarom de alternatieve tekst zichtbaar is als element bij img <img src={tileImage} alt="tile image"/>*/

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
