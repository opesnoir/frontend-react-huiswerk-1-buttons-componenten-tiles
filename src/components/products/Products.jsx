/*
1. Maak een omwikkelende `main`-tag voor de producten. Stop daar vier `article`-elementen in zoals op bovenstaande afbeelding, met:
* Een `span` voor het rode label
* De afbeelding van de tassen
* Een `p` voor de naam van de tas
* Een `h4` voor de prijs
2. Maak nu een custom `Product`-component die alle benodigde data kan ontvangen, zodat hij voor alle vier de huidige uitvoeringen te gebruiken is. Vervang dan de huidige product-blokken
door jouw custom component en geef je juiste informatie mee.*/

import React from 'react';
import styles from "../products/Products.module.css";


function Products({redLabel, imgBag, imgAlt, nameBag, priceBag}) {
    return (
        <>
            <main>
                <article className={styles.product}>
                    <span>{redLabel}</span>
                    <img src={imgBag} alt{imgAlt}/>
                    <p>{nameBag}</p>
                    <h4>€{priceBag},-</h4>
                </article>
            </main>
        </>
    );
}

export default Products;