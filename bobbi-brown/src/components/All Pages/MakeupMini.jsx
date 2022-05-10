import React, { useState } from 'react'
import styled from "styled-components"
import ProductMapping from './ProductMapping';
import makeupMini1 from '../Images/makeupMini1.png'
import makeupMini2 from '../Images/makeupMini2.png'
import { Link } from 'react-router-dom';

const MakeupMiniStyling = styled.div`
body{
    font-family:Roboto;
}
.topTextonImage{
    position:absolute;
    margin-top:-32vh;
    margin-left:40vw;
    font-size:50px;
    color: white;
    font-family:;
    letter-spacing: 2px;
}
.mappedGridding{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    width:89vw;
    margin:auto;
    margin-top:20px;
}
`;

const MakeupMini = () => {

    const makeupMiniData = [
        {
            "id": 91,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERE011_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Mini Skin Long-Wear Weightless Foundation SPF15",
            "description": "16-hour, medium coverage matte formula",
            "color": "Porcelain (N-012 / 0)",
            "price": 25,
            "totalReview": 12
        },
        {
            "id": 92,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EWAM04_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Mini Long-Wear Cream Shadow Stick",
            "description": "Does-it-all, budge-proof crayon",
            "color": "Golden Pink",
            "price": 15,
            "totalReview": 5
        },
        {
            "id": 93,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPH201_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Mini Highlighting Powder",
            "description": "Pearlescent Glow on the Go",
            "color": "Pink Glow",
            "price": 25,
            "totalReview": 251
        },
        {
            "id": 94,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPH101_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Mini Shimmer Brick",
            "description": "Glow-boosting highlighter",
            "color": "Bronze",
            "price": 25,
            "totalReview": 944
        },
        {
            "id": 95,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERLN01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Mini Bronzing Powder",
            "description": "Sun-kissed, matte-finish bronzer",
            "color": "Golden Light",
            "price": 25,
            "totalReview": 2
        },
        {
            "id": 96,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EWAP06_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Mini Crushed Lip Color",
            "description": "Lived-in look & balm-like hydration",
            "color": "Cranberry",
            "price": 15,
            "totalReview": 2
        },
        {
            "id": 97,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETF518_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Mini Luxe Lip Color",
            "description": "Bold, moisture-full lipstick",
            "color": "Hibiscus",
            "price": 20,
            "totalReview": 356
        },
        {
            "id": 98,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETF301_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Mini Luxe Lip Color Duo",
            "description": "Bold, moisture-full lipstick duo",
            "price": 25,
            "totalReview": 1
        },
        {
            "id": 99,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPGP01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Mini Soothing Cleansing Oil",
            "description": "On-the-go gentle makeup-dissolving oil",
            "price": 15,
            "totalReview": 154
        },
        {
            "id": 910,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPGN01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Mini Vitamin Enriched Face Base",
            "description": "Oil-free moisturizer and primer",
            "price": 20,
            "totalReview": 2708
        }
    ]

    const [data, setData] = useState([...makeupMiniData]);

    //sorting part
    const handleSort = (e) => {
        var sort = e.target.value;
        if (sort === "Price [Low to High]") {
            let hl = data.sort((a, b) => a.price - b.price);
            setData([...hl])
        }
        else if (sort === "Price [High to Low]") {
            let lh = data.sort((a, b) => b.price - a.price);
            setData([...lh])
        }
        else if (sort === "Rating [High to Low]") {
            let hl = data.sort((a, b) => b.totalReview - a.totalReview);
            setData([...hl])
        }
        else if (sort === "Rating [Low to High]") {
            let lh = data.sort((a, b) => a.totalReview - b.totalReview);
            setData([...lh])
        }
        else if (sort === "Name [A to Z]") {
            let aToz = data.sort((a, b) => (a.name > b.name ? 1 : -1));
            setData([...aToz])
        }
        else if (sort === "Name [Z to A]") {
            let zToa = data.sort((a, b) => (a.name > b.name ? -1 : 1));
            setData([...zToa])
        }
        else if (sort === "Sort By") {
            setData([...makeupMiniData])
        }
    }


    return (
        <div>
            <MakeupMiniStyling>
                <div>
                    <img style={{ width: "100vw" }} src={makeupMini1} alt='' />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto", paddingTop: "20px" }}>
                    <Link to="/" style={{ textDecoration: "none", fontSize: "17px" }}><h6 style={{ fontSize: "13px" }}>HOME</h6></Link>
                    <select onClick={handleSort}>
                        <option>Sort By</option>
                        <option id='hl' >Price [High to Low]</option>
                        <option id='lh'>Price [Low to High]</option>
                        <option id='hl'>Rating [High to Low]</option>
                        <option id='hl'>Rating [Low to High]</option>
                        <option id='hl'>Name [A to Z]</option>
                        <option id='hl'>Name [Z to A]</option>
                    </select>
                </div>
                <div className='mappedGridding'>
                    {data.map((e) => (<ProductMapping {...e} key={e.id} />))}
                </div>
                <div>
                    <img src={makeupMini2} alt='' style={{ width: "100vw", padding: "50px" }} />
                </div>
                <h6 style={{ width: "71%", margin: "auto", paddingBottom: "30px", fontSize: "14px", letterSpacing: "1px" }}>Our best moisturizer face & best skincare products to nourish skin and create the perfect canvas for makeup application. Bobbi's top-rated collection of best moisturizer face & best skincare products infuse skin with luxurious hydration. Discover our best moisturizer face & best skincare products to nourish, hydrate, repair & soothe all skin types.</h6>
            </MakeupMiniStyling>
        </div>
    )
}

export default MakeupMini