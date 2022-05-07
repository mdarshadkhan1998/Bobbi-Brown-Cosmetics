//  MothersMapping
import React, { useState } from 'react'
import styled from "styled-components"
import ProductMapping from './ProductMapping';
import face1 from '../Images/face1.png'
import face2 from '../Images/face2.png'
import face3 from '../Images/face3.png'
import face4 from '../Images/face4.png'
import face5 from '../Images/face5.png'
import face6 from '../Images/face6.png'

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
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Luxe & Glow",
            "description": "4 luxurious formulas for lids and lips",
            "tag": "Limited Edition",
            "price": 83,
            "totalReview": 3725
        },
        {
            "id": 112,
            "image": "  ",
            "rating": "★★★★★",
            "name": "Vitamin Enriched Face Base",
            "description": "Multitasking, moisturizing primer",
            "tag": "Top-Rated",
            "price": 64,
            "totalReview": 2708
        },
        {
            "id": 113,
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Beach",
            "description": "Light, summer-inspired perfume",
            "tag": "Top-Rated",
            "price": 80,
            "totalReview": 385
        },
        {
            "id": 116,
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Vitamin Enriched Eye Base",
            "description": "Moisturizing undereye primer",
            "tag": "New",
            "price": 56,
            "totalReview": 108
        },
        {
            "id": 119,
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Soothing Cleansing Oil",
            "description": "Makeup remover and cleanser",
            "tag": "EXCLUSIVE PRESALE",
            "price": 50,
            "totalReview": 154
        },
        {
            "id": 1112,
            "image": "  ",
            "rating": "★★☆☆☆                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ",
            "name": "Soothing Cleansing Oil",
            "price": 50,
            "totalReview": 3725
        },
        {
            "id": 1113,
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
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
            "image": "  ",
            "rating": "★★★★★",
            "name": "Crushed Shine Jelly Stick",
            "description": "Sheer Pop of Hydrating Lip Color",
            "price": "$20.30",
            "color": "Candy Apple",
            "totalReview": 30
        },
        {
            "id": 1120,
            "image": "  ",
            "rating": "★★☆☆☆",
            "name": "Primer Plus Protection SPF 50",
            "description": "Protective face primer",
            "tag": "Top-Rated",
            "price": 40,
            "totalReview": 84
        },
        {
            "id": 1121,
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Real Nudes Eye Shadow Palette",
            "description": "Versatile neutral eye palette",
            "price": 45,
            "color": "Golden Nudes",
            "totalReview": 26
        },
        {
            "id": 1122,
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Extra Cleansing Balm",
            "description": "Purifying, conditioning cleanser",
            "tag": "New",
            "price": 56,
            "totalReview": 36
        },
        {
            "id": 1123,
            "image": "  ",
            "rating": "★★☆☆☆",
            "name": "Extra Repair Moisture Cream Intense",
            "description": "Replenishing face cream with Vitamin C",
            "tag": "New",
            "price": 705,
            "totalReview": 52
        },
        {
            "id": 1124,
            "image": "  ",
            "rating": "★★★★★",
            "name": "Extra Repair Eye Cream Intense",
            "description": "Revitalizing undereye treatment",
            "tag": "New",
            "price": 82,
            "totalReview": 72
        },
        {
            "id": 1125,
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Hydrating Face Cream",
            "description": "Rich yet lightweight moisturizer",
            "tag": "Best Seller",
            "price": 64,
            "totalReview": 535
        },
        {
            "id": 1126,
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Hydrating Water Fresh Cream",
            "description": "100 hours of nonstop hydration",
            "tag": "New",
            "price": 64,
            "totalReview": 58
        },
        {
            "id": 1127,
            "image": "  ",
            "rating": "★★★★★",
            "name": "Hydrating Eye Cream",
            "description": "Gentle, quick-absorbing eye cream",
            "tag": "Best Seller",
            "price": 56,
            "totalReview": 639
        },
        {
            "id": 1128,
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Mini Extra Illuminating Moisture Balm",
            "description": "Glow big (in a new mini size)",
            "price": 30,
            "color": "Pink Glow",
            "totalReview": 138
        },
        {
            "id": 1129,
            "image": "  ",
            "rating": "★★★★☆",
            "name": "Extra Repair Moisture Cream Intense Refill",
            "description": "Refill. Reuse. Repeat.",
            "tag": "New",
            "price": 85,
            "totalReview": 2
        },
        {
            "id": 1130,
            "image": "  ",
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

    return (
        <div>
            <MothersMappingStyling>
                <div>
                    <img style={{ width: "100vw" }} src={face1} alt='' />
                </div>
                <div>

                </div>
                <div className='mappedGridding'>
                    {data.map((e) => (<ProductMapping {...e} key={e.id} />))}
                </div>
                <div>
                    <img src={face2} alt='' style={{ width: "100vw", padding: "50px" }} />
                </div>
                <h6 style={{ width: "71%", margin: "auto", paddingBottom: "30px", fontSize: "14px", letterSpacing: "1px" }}>Our best moisturizer face & best skincare products to nourish skin and create the perfect canvas for makeup application. Bobbi's top-rated collection of best moisturizer face & best skincare products infuse skin with luxurious hydration. Discover our best moisturizer face & best skincare products to nourish, hydrate, repair & soothe all skin types.</h6>
            </MothersMappingStyling>
        </div>
    )
}

export default MothersMapping
