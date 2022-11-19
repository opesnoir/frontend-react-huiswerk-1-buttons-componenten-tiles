import './App.css';
import Buttons from "./components/buttons/Buttons";
import Products from "./components/products/Products";
import Tiles from "./components/tiles/Tiles";
import bag_1 from "../src/assets/bag_1.png";
import bag_2 from "../src/assets/bag_2.png";
import bag_3 from "../src/assets/bag_3.png";
import bag_ from "../src/assets/bag_4.png";
import ourStory from "../src/assets/our_story.png";
import brand from "../src/assets/brand.png";
import React from "react";


function App() {
    return (
        <>

            <h1>Handbags & Purses</h1>
            <Buttons
                buttonCollection="to the collection"
                buttonShop="shop all bags"
                buttonPreorder="pre-order"
            />
<span>
            <Products
                redLabel="Best seller"
                imgBag= {bag_1}
                imgAlt="image bag"
                nameBag= "The handy bag"
                priceBag={[400]}
            />
            <Products
                redLabel="Best seller"
                imgBag= {bag_1}
                imgAlt="image bag"
                nameBag= "The stylish bag"
                priceBag={[250]}
            />
            <Products
                redLabel="New collection"
                imgBag= {bag_1}
                imgAlt="image bag"
                nameBag= "The simple bag"
                priceBag={[300]}
            />
            <Products
                redLabel="New collection"
                imgBag= {bag_1}
                imgAlt="image bag"
                nameBag= "The trendy bag"
                priceBag={[150]}
            />
</span>

<span>
                <Tiles
                    tileTitle="The Brand"
                    tileTekst="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi delectus error illo natus obcaecati reprehenderit, tenetur totam ut veritatis! Eveniet iusto, laborum modi placeat quasi sunt ullam vel? Voluptatibus?"
                />

                <Tiles
                    tileImage={brand}
                    altTekst="picture of box"
                />
                <Tiles
                    tileImage={ourStory}
                    altTekst="picture of two people"
                />
                <Tiles
                    tileTitle="Our Story"
                    tileTekst={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi delectus error illo natus obcaecati reprehenderit, tenetur totam ut veritatis! Eveniet iusto, laborum modi placeat quasi sunt ullam vel? Voluptatibus?"}
                />


</span>

        </>
    );
}

export default App;





