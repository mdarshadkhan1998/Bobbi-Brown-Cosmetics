//  MothersMapping
import React, { useState } from 'react'
import styled from "styled-components"
import ProductMapping from './ProductMapping';
import motherPick1 from '../Images/motherPick1.png'
import { Link } from 'react-router-dom';

const MothersMappingStyling = styled.div`
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

const MothersMapping = () => {

    const MothersMappingData = [
        {
            "id": 111,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Luxe & Glow",
            "description": "4 luxurious formulas for lids and lips",
            "tag": "Limited Edition",
            "price": 83,
            "totalReview": 3725
        },
        {
            "id": 112,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Vitamin Enriched Face Base",
            "description": "Multitasking, moisturizing primer",
            "tag": "Top-Rated",
            "price": 64,
            "totalReview": 2708
        },
        {
            "id": 113,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR04_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Skin Long-Wear Weightless Foundation SPF 15",
            "description": "16-hour, breathable, natural matte coverage",
            "tag": "Free Shipping & Returns",
            "price": 50,
            "color": "Natural (N-052 / 4)",
            "totalReview": 791
        },
        {
            "id": 114,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E40_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Long-Wear Cream Shadow Stick",
            "description": "Our ultimate quick eye shadow stick",
            "tag": "TRY IT ON",
            "price": 30,
            "color": "Bone",
            "totalReview": 1192
        },
        {
            "id": 115,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E7YW01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Beach",
            "description": "Light, summer-inspired perfume",
            "tag": "Top-Rated",
            "price": 80,
            "totalReview": 385
        },
        {
            "id": 116,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPXL09_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Skin Corrector Stick",
            "description": "Discoloration neutralizer for undereyes & face",
            "tag": "New",
            "price": 32,
            "color": "Bisque",
            "totalReview": 32
        },
        {
            "id": 117,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Skin Concealer Stick",
            "description": "Easy-to-use, long-lasting concealer stick",
            "tag": "New",
            "price": 32,
            "color": "Honey",
            "totalReview": 28
        },
        {
            "id": 118,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EL1901_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Vitamin Enriched Eye Base",
            "description": "Moisturizing undereye primer",
            "tag": "New",
            "price": 56,
            "totalReview": 108
        },
        {
            "id": 119,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EER901_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Extra Lip Tint",
            "description": "Color-enhancing lip balm",
            "tag": "TRY IT ON",
            "price": 34,
            "color": "Bare Pink",
            "totalReview": 470
        },
        {
            "id": 1110,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFAA01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Highlighting Powder",
            "description": "Pearl-infused illuminator",
            "tag": "New Shades",
            "price": 50,
            "color": "Pink Glow",
            "totalReview": 251
        },
        {
            "id": 1111,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4201_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Soothing Cleansing Oil",
            "description": "Makeup remover and cleanser",
            "tag": "EXCLUSIVE PRESALE",
            "price": 50,
            "totalReview": 154
        },
        {
            "id": 1112,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCT01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ",
            "name": "Soothing Cleansing Oil",
            "price": 50,
            "totalReview": 3725
        },
        {
            "id": 1113,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4708_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Luxe Shine Intense Lipstick",
            "description": "Shine-amplified color & rich hydration",
            "tag": "TRY IT ON",
            "price": 38,
            "color": "Red Stiletto",
            "totalReview": 120
        },
        {
            "id": 1114,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EE1Y03_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Luxe Lip Color",
            "description": "Bold, moisture-infused lipstick",
            "tag": "TRY IT ON",
            "price": 38,
            "color": "Almost Bare",
            "totalReview": 245
        },
        {
            "id": 1115,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EHJA16_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Luxe Matte Lip Color",
            "description": "Intense, ultra-matte lipstick",
            "tag": "TRY IT ON",
            "price": 38,
            "color": "Burnt Cherry",
            "totalReview": 129
        },
        {
            "id": 1116,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EMCK02_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Crushed Oil-Infused Gloss",
            "description": "Hydrating, non-sticky lip gloss",
            "tag": "TRY IT ON",
            "price": 29,
            "color": "Free Spirit",
            "totalReview": 263
        },
        {
            "id": 1117,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EH2102_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Crushed Lip Color",
            "description": "Playful, effortless color",
            "tag": "TRY IT ON",
            "price": 29,
            "color": "Bare",
            "totalReview": 354
        },
        {
            "id": 1118,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EL1104_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Crushed Liquid Lip",
            "description": "Bold, glossy color with a balmy feel",
            "tag": "TRY IT ON",
            "price": 29,
            "color": "Juicy Date",
            "totalReview": 608
        },
        {
            "id": 1119,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EP7406_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Crushed Shine Jelly Stick",
            "description": "Sheer Pop of Hydrating Lip Color",
            "price": "$20.30",
            "color": "Candy Apple",
            "totalReview": 30
        },
        {
            "id": 1120,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EKLT01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Primer Plus Protection SPF 50",
            "description": "Protective face primer",
            "tag": "Top-Rated",
            "price": 40,
            "totalReview": 84
        },
        {
            "id": 1121,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65X01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Real Nudes Eye Shadow Palette",
            "description": "Versatile neutral eye palette",
            "price": 45,
            "color": "Golden Nudes",
            "totalReview": 26
        },
        {
            "id": 1122,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Extra Cleansing Balm",
            "description": "Purifying, conditioning cleanser",
            "tag": "New",
            "price": 56,
            "totalReview": 36
        },
        {
            "id": 1123,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EREP01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Extra Repair Moisture Cream Intense",
            "description": "Replenishing face cream with Vitamin C",
            "tag": "New",
            "price": 705,
            "totalReview": 52
        },
        {
            "id": 1124,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EP7P01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Extra Repair Eye Cream Intense",
            "description": "Revitalizing undereye treatment",
            "tag": "New",
            "price": 82,
            "totalReview": 72
        },
        {
            "id": 1125,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65X01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Hydrating Face Cream",
            "description": "Rich yet lightweight moisturizer",
            "tag": "Best Seller",
            "price": 64,
            "totalReview": 535
        },
        {
            "id": 1126,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EMNE01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Hydrating Water Fresh Cream",
            "description": "100 hours of nonstop hydration",
            "tag": "New",
            "price": 64,
            "totalReview": 58
        },
        {
            "id": 1127,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65Y01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Hydrating Eye Cream",
            "description": "Gentle, quick-absorbing eye cream",
            "tag": "Best Seller",
            "price": 56,
            "totalReview": 639
        },
        {
            "id": 1128,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERJK03_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Mini Extra Illuminating Moisture Balm",
            "description": "Glow big (in a new mini size)",
            "price": 30,
            "color": "Pink Glow",
            "totalReview": 138
        },
        {
            "id": 1129,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERER01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Extra Repair Moisture Cream Intense Refill",
            "description": "Refill. Reuse. Repeat.",
            "tag": "New",
            "price": 85,
            "totalReview": 2
        },
        {
            "id": 1130,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPHC01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Extra Repair Eye Cream Intense Refill",
            "description": "Skin loving. Planet conscious.",
            "tag": "New",
            "price": 68,
            "totalReview": 5
        }
    ]


    const [data, setData] = useState([...MothersMappingData]);
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
            setData([...MothersMappingData])
        }
    }


    return (
        <div>
            <MothersMappingStyling>
                <div>
                    <img style={{ width: "100vw" }} src={motherPick1} alt='' />
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
                <h6 style={{ width: "71%", margin: "auto", paddingBottom: "30px", fontSize: "14px", letterSpacing: "1px" }}>Our best moisturizer face & best skincare products to nourish skin and create the perfect canvas for makeup application. Bobbi's top-rated collection of best moisturizer face & best skincare products infuse skin with luxurious hydration. Discover our best moisturizer face & best skincare products to nourish, hydrate, repair & soothe all skin types.</h6>
            </MothersMappingStyling>
        </div>
    )
}

export default MothersMapping
