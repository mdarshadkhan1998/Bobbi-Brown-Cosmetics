import React, { useState } from 'react'
import styled from "styled-components"
import ProductMapping from './ProductMapping';
import face1 from '../Images/face1.png'
import face2 from '../Images/face2.png'
import face3 from '../Images/face3.png'
import face4 from '../Images/face4.png'
import face5 from '../Images/face5.png'
import face6 from '../Images/face6.png'
import { Link } from 'react-router-dom';

const FaceProductMappingStyling = styled.div`
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

const FaceProductMapping = () => {

    const faceMappingData = [
        {
            id: 813,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E6XW02_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Corrector",
            "description": "Full-coverage dark circle corrector",
            "tag": "Free Shipping & Returns",
            "color": "Light Bisque",
            "totalReview": 840,
            "rating": "★★☆☆☆",
            "price": 32
        },
        {
            id: 814,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E6XT08_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Creamy Concealer Kit",
            "description": "Two-step undereye-brightening kit",
            "tag": "Free Shipping & Returns",
            "color": "Natural",
            "totalReview": 511,
            "rating": "★★★★☆",
            "price": 40
        },
        {
            id: 830,
            "justImage": face3,
        },
        {
            id: 815,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EH9A01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Instant Full Cover Concealer",
            "description": "Full-coverage, long-lasting concealer",
            "tag": "Best Seller",
            "color": "Porcelain",
            "totalReview": 397,
            "rating": "★★★★★",
            "price": 32
        },
        {
            id: 816,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EN6F14_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Intensive Skin Serum Concealer",
            "description": "Radiance-boosting concealer",
            "tag": "Free Shipping & Returns",
            "color": "Chestnut",
            "totalReview": 164,
            "rating": "★★★★☆",
            "price": 30,
            "strikedOffPrice": "$44.00"
        },
        {
            id: 817,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EHLL01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Primer Plus Mattifier",
            "description": "Oil-absorbing primer",
            "totalReview": 61,
            "rating": "★★☆☆☆",
            "price": 40
        },
        {
            id: 831,
            "justImage": face4,
        },
        {
            id: 818,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EKLT01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Primer Plus Protection SPF 50",
            "description": "Protective face primer",
            "tag": "Top-Rated",
            "totalReview": 84,
            "rating": "★★★☆☆",
            "price": 40
        },
        {
            id: 81,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Vitamin Enriched Face Base",
            "description": "Multitasking, moisturizing primer",
            "tag": "Top-Rated",
            "color": "Natural (N-052)",
            "totalReview": 2708,
            "rating": "★★★☆☆",
            "price": 64
        },
        {
            id: 82,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR04_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Skin Long-Wear Weightless Foundation SPF 15",
            "description": "16-hour, breathable, natural matte coverage",
            "tag": "Free Shipping & Returns",
            "color": "Natural (N-052 / 4)",
            "totalReview": 791,
            "rating": "★★★★☆",
            "price": 50
        },
        {
            id: 83,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPXL09_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Skin Corrector Stick",
            "description": "Discoloration neutralizer for undereyes & face",
            "tag": "New",
            "color": "Bisque",
            "totalReview": 32,
            "rating": "★★★★★",
            "price": 32
        },
        {
            id: 84,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Skin Concealer Stick",
            "description": "Easy-to-use, long-lasting concealer stick",
            "tag": "New",
            "color": "Honey",
            "totalReview": 28,
            "rating": "★★★☆☆",
            "price": 32
        },
        {
            id: 85,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EME704_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Intensive Serum Foundation SPF 40/30",
            "description": "Radiance-boosting foundation",
            "color": "Natural (N-052)",
            "totalReview": 471,
            "rating": "★★☆☆☆",
            "price": 72
        },
        {
            id: 86,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETRR08_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Intensive Serum Concealer",
            "description": "Brightens and boosts hydration",
            "tag": "New",
            "color": "Natural",
            "totalReview": 2,
            "rating": "★★★★☆",
            "price": 45
        },
        {
            id: 832,
            "justImage": face5,
        },
        {
            id: 87,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EA6C04_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Skin Foundation Stick",
            "description": "Multitasking, on-the-go stick",
            "tag": "Free Shipping & Returns",
            "color": "Natural (N-052 / 4)",
            "totalReview": 918,
            "rating": "★★★☆☆",
            "price": 50
        },
        {
            id: 88,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E2LE05_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Skin Foundation SPF 15",
            "description": "Water-based, oil-free foundation",
            "tag": "Free Shipping & Returns",
            "color": "Honey (W-064 / 5)",
            "totalReview": 1059,
            "rating": "★★★☆☆",
            "price": 50
        },
        {
            id: 89,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET5K12_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Skin Weightless Powder Foundation",
            "description": "Silky, oil-free powder formula",
            "color": "Warm Natural",
            "totalReview": 11,
            "rating": "★★★★★",
            "price": 52
        },
        {
            id: 833,
            "justImage": face6,
        },
        {
            id: 810,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENHM04_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Skin Long-Wear Fluid Powder Foundation SPF 20",
            "description": "Hybrid liquid-to-powder foundation",
            "tag": "New",
            "color": "Natural (N-052)",
            "totalReview": 131,
            "rating": "★★★★☆",
            "price": 40
        },
        {
            id: 811,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENPT01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Sheer Finish Pressed Powder",
            "description": "Oil-absorbing powder",
            "color": "Pale Yellow",
            "totalReview": 114,
            "rating": "★★★★☆",
            "price": 45
        },
        {
            id: 812,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENPW01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Sheer Finish Loose Powder",
            "description": "Oil-free mattifying powder",
            "color": "Pale Yellow",
            "totalReview": 7,
            "rating": "★★★★★",
            "price": 45
        },
        {
            id: 819,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EHP201_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Extra Illuminating Moisture Balm",
            "description": "Glow-amplifying moisturizer",
            "tag": "Customer Favorite",
            "color": "Bare Glow",
            "totalReview": 138,
            "rating": "★★☆☆☆",
            "price": 69
        },
        {
            id: 820,
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERE011_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Mini Skin Long-Wear Weightless Foundation SPF15",
            "description": "16-hour, medium coverage matte formula",
            "tag": "Mini Size",
            "color": "Porcelain (N-012 / 0)",
            "totalReview": 12,
            "rating": "★★★★☆",
            "price": 25
        },
        {
            id: 821,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E3CA01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Foundation Brush",
            "description": "Expertly angled face brush",
            "tag": "Top-Rated",
            "totalReview": 228,
            "rating": "★★★☆☆",
            "price": 52
        },
        {
            id: 822,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E55501_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Powder Brush",
            "description": "Gently tapered setting brush",
            "tag": "Top-Rated",
            "totalReview": 96,
            "rating": "★★★★☆",
            "price": 70
        },
        {
            id: 823,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERYX01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Mini Sheer Finish Pressed Powder",
            "description": "Portable, oil-absorbing powder",
            "color": "Pale Yellow",
            "totalReview": 1,
            "rating": "★★☆☆☆",
            "price": 25
        },
        {
            id: 824,
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E55901_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "name": "Bronzer Brush",
            "description": "Soft brush for seamless finish",
            "tag": "Top-Rated",
            "totalReview": 190,
            "rating": "★★★☆☆",
            "price": 62
        }
    ]


    const [data, setData] = useState([...faceMappingData]);
    // console.log(data)
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
            setData([...faceMappingData])
        }
    }


    return (
        <div>
            <FaceProductMappingStyling>
                <div>
                    <img style={{ width: "100vw" }} src={face1} alt='' />
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
                    <img src={face2} alt='' style={{ width: "100vw", padding: "50px" }} />
                </div>
                <h6 style={{ width: "71%", margin: "auto", paddingBottom: "30px", fontSize: "14px", letterSpacing: "1px" }}>Our best moisturizer face & best skincare products to nourish skin and create the perfect canvas for makeup application. Bobbi's top-rated collection of best moisturizer face & best skincare products infuse skin with luxurious hydration. Discover our best moisturizer face & best skincare products to nourish, hydrate, repair & soothe all skin types.</h6>
            </FaceProductMappingStyling>
        </div>
    )
}

export default FaceProductMapping