//Pseudo code:
//1. import React from "react";
//2. import styles from "./Buttons.module.css";
//3. schrijf een functie: rsf > tab

import React from "react";
import styles from "./Buttons.module.css";

rsf
function ProductCard( { title, price } ) {
    return (
        <>
            <div className={ styles.product }>
                <h3>{ title }</h3>
                <span>{ price },-- euro</span>
            </div>
        </>
    );
}

export default ProductCard;