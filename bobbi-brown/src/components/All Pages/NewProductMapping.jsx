import React, { useState } from 'react'
import styled from "styled-components"
import ProductMapping from './ProductMapping';
import new1 from '../Images/new1.png'
import new2 from '../Images/new2.png'
import new3 from '../Images/new3.png'
import new4 from '../Images/new4.png'
import new5 from '../Images/new5.png'
import { Link } from 'react-router-dom';

const NewProductMappingStyling = styled.div`
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

const NewProductMapping = () => {

    const NewDataMapping = [
        {
            id: 71,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_24845_1080x1080_1.jpg",
            "rating": "★★★★☆",
            "name": "Long-Wear Cream Shadow Stick",
            "description": "Our ultimate quick eye shadow stick",
            "tag": "TRY IT ON",
            "color": "Incandescent",
            "price": 30,
            "totalReview": 1192,
        },
        {
            id: 72,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSF0_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "MZ Wallace Corrector & Concealer Stick Bundle",
            "description": "Portable, oil-absorbing powder",
            "tag": "Limited Edition",
            "color": "Lavender",
            "price": 70,
            "totalReview": 97,
        },
        {
            id: 730,
            "justImage": new3,
        },
        {
            id: 73,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_102124_1080x1080_0.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_102124_1080x1080_1.jpg",
            "rating": "★★★☆☆",
            "name": "Luxe & Glow",
            "description": "4 luxurious formulas for lids and lips",
            "tag": "Limited Edition",
            "color": "Pale Yellow",
            "price": 83,
            "totalReview": 97,
        },
        {
            id: 74,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPXL09_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Skin Corrector Stick",
            "description": "Discoloration neutralizer for undereyes & face",
            "tag": "New",
            "color": "Bisque",
            "price": 32,
            "totalReview": 32,
        },
        {
            id: 75,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Skin Concealer Stick",
            "description": "Easy-to-use, long-lasting concealer stick",
            "tag": "New",
            "color": "Honey",
            "price": 32,
            "totalReview": 28,
        },
        {
            id: 76,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETRR08_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Intensive Serum Concealer",
            "description": "Brightens and boosts hydration",
            "tag": "New",
            "color": "Natural",
            "price": 45,
            "totalReview": 2,
        },
        {
            id: 77,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW5632_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Pot Rouge for Lips & Cheeks",
            "description": "Pretty Powerful cheek & lip color",
            "tag": "TRY IT ON",
            "color": "Pretty Powerful",
            "price": 34,
            "totalReview": 962,
        },
        {
            id: 78,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Highlighting Powder",
            "description": "Pearl-infused illuminator",
            "tag": "New Shades",
            "color": "Pink Glow",
            "price": 50,
            "totalReview": 251,
        },
        {
            id: 731,
            "justImage": new4,
        },
        {
            id: 79,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Extra Lip Tint",
            "description": "Color-enhancing lip balm",
            "tag": "TRY IT ON",
            "color": "Bare Claret",
            "price": 34,
            "totalReview": 470,
        },
        {
            id: 710,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERJK03_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Mini Extra Illuminating Moisture Balm",
            "description": "Glow big (in a new mini size",
            "tag": "Limited Edition",
            "color": "Pink Glow",
            "price": 30,
            "totalReview": 138,
        },
        {
            id: 711,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Luxe Eye Shadow",
            "description": "Metallic Shimmer Eye Shadow",
            "tag": "TRY IT ON",
            "color": "Sun Dip",
            "price": 38,
            "totalReview": 130,
        },
        {
            id: 712,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EP7P01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Extra Repair Eye Cream Intense",
            "description": "Revitalizing undereye treatment",
            "tag": "New",
            "color": "Pale Yellow",
            "price": 82,
            "totalReview": 72,
        },
        {
            id: 713,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPHC01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Extra Repair Eye Cream Intense Refill",
            "description": "Skin loving. Planet conscious.",
            "tag": "New",
            "color": "Peach",
            "price": 68,
            "totalReview": 5,
        },
        {
            id: 714,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Extra Repair Moisture Cream Intense",
            "description": "Replenishing face cream with Vitamin C",
            "tag": "New",
            "color": "Pale Yellow",
            "price": 705,
            "totalReview": 52,
        },
        {
            id: 715,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EREP01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Extra Repair Moisture Cream Intense Refill",
            "description": "Refill. Reuse. Repeat.",
            "tag": "New",
            "color": "Pink",
            "price": 85,
            "totalReview": 2,
        },
        {
            id: 732,
            "justImage": new5,
        },
        {
            id: 716,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Extra Cleansing Balm",
            "description": "Purifying, conditioning cleanser",
            "tag": "New",
            "color": "Pale Pink",
            "price": 56,
            "totalReview": 36,
        },
        {
            id: 717,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET7C01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Deluxe Size Vitamin Enriched Face Base",
            "description": "Moisturizer and primer in one",
            "tag": "New",
            "color": "Incandacent",
            "price": 95,
            "totalReview": 7,
        },
        {
            id: 718,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETP201_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Just A Hint Extra Lip Tint Set",
            "description": "Powerful tinted lip treatment",
            "tag": "New",
            "color": "Pale Yellow",
            "price": 60,
            "totalReview": 4,
        },
        {
            id: 719,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EWAM04_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Mini Long-Wear Cream Shadow Stick",
            "description": "Does-it-all, budge-proof crayon",
            "tag": "Limited Edition",
            "color": "Golden Pink",
            "price": 15,
            "totalReview": 5,
        },
        {
            id: 720,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EWAN01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Mini Smokey Eye Mascara",
            "description": "Mascara for Volume and Length",
            "tag": "Limited Edition",
            "color": "Pale Yellow",
            "price": 15,
            "totalReview": 97,
        },
        {
            id: 721,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EWAP06_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Mini Crushed Lip Color",
            "description": "Lived-in look & balm-like hydration",
            "tag": "New",
            "color": "Cranberry",
            "price": 15,
            "totalReview": 2,
        },
        {
            id: 722,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EWAR06_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Mini Luxe Lip Color",
            "description": "Bold, moisture-full lipstick",
            "tag": "Try-It",
            "color": "Neutral Rose",
            "price": 20,
            "totalReview": 97,
        },
        {
            id: 723,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERYX01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Mini Sheer Finish Pressed Powder",
            "description": "Portable, oil-absorbing powder",
            "tag": "Limited Edition",
            "color": "Pale Yellow",
            "price": 25,
            "totalReview": 1,
        },
        {
            id: 724,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET9301_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Soothing Cleansing Oil",
            "description": "Our ultimate quick eye shadow stick",
            "tag": "New",
            "color": "Teal",
            "price": 32,
            "totalReview": 97,
        }
    ]

    const [data, setData] = useState([...NewDataMapping]);

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
            setData([...NewDataMapping])
        }
    }


    return (
        <>
            <div>
                <NewProductMappingStyling>
                    <div>
                        <img style={{ width: "100vw" }} src={new1} alt='' />
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
                        <img src={new2} alt='' style={{ width: "100vw", padding: "50px" }} />
                    </div>
                    <h6 style={{ width: "71%", margin: "auto", paddingBottom: "30px", fontSize: "14px", letterSpacing: "1px" }}>Our best moisturizer face & best skincare products to nourish skin and create the perfect canvas for makeup application. Bobbi's top-rated collection of best moisturizer face & best skincare products infuse skin with luxurious hydration. Discover our best moisturizer face & best skincare products to nourish, hydrate, repair & soothe all skin types.</h6>
                </NewProductMappingStyling>
            </div>
        </>
    )
}

export default NewProductMapping