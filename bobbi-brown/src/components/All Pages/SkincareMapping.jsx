//  SkincareMapping

import React, { useState } from 'react'
import styled from "styled-components"
import ProductMapping from './ProductMapping';
import skincare1 from '../Images/skincare1.png'
import skincare2 from '../Images/skincare2.png'
import skincare3 from '../Images/skincare3.png'
import skincare4 from '../Images/skincare4.png'
import skincare5 from '../Images/skincare5.png'
import { Link } from 'react-router-dom';

const SkincareMappingStyling = styled.div`
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

const SkincareMapping = () => {

    const SkincareMappingData = [
        {
            "id": 51,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Vitamin Enriched Face Base",
            "description": "Multitasking, moisturizing primer",
            "totalReview": 2708,
            "price": 64,
            "tag": "Top-Rated"
        },
        {
            "id": 52,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EL1901_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★☆☆",
            "name": "Vitamin Enriched Eye Base",
            "description": "Moisturizing undereye primer",
            "totalReview": 108,
            "price": 56,
            "tag": "New"
        },
        {
            id: 30,
            "justImage": skincare3,
        },
        {
            "id": 53,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EREP01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Extra Repair Moisture Cream Intense",
            "description": "Replenishing face cream with Vitamin C",
            "totalReview": 52,
            "price": 105,
            "tag": "New"
        },
        {
            "id": 54,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EP7P01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Extra Repair Eye Cream Intense",
            "description": "Revitalizing undereye treatment",
            "totalReview": 72,
            "price": 82,
            "tag": "New"
        },
        {
            "id": 55,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Extra Cleansing Balm",
            "description": "Purifying, conditioning cleanser",
            "totalReview": 36,
            "price": 56,
            "tag": "New"
        },
        {
            "id": 56,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65X01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Hydrating Face Cream",
            "description": "Rich yet lightweight moisturizer",
            "totalReview": 535,
            "price": 64,
            "tag": "Best Seller"
        },
        {
            "id": 57,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65Y01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Hydrating Eye Cream",
            "description": "Gentle, quick-absorbing eye cream",
            "totalReview": 639,
            "price": 56,
            "tag": "Best Seller"
        },
        {
            "id": 58,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EMNE01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Hydrating Water Fresh Cream",
            "description": "100 hours of nonstop hydration",
            "totalReview": 58,
            "price": 64,
            "tag": "New"
        },
        {
            id: 31,
            "justImage": skincare4,
        },
        {
            "id": 59,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EHP201_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Extra Illuminating Moisture Balm",
            "description": "Glow-amplifying moisturizer",
            "totalReview": 138,
            "price": 69,
            "tag": "Customer Favorite",
            "color": "Bare Glow"
        },
        {
            "id": 510,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1YJ01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Extra Face Oil",
            "description": "Silky, fast-absorbing face oil",
            "totalReview": 264,
            "price": 72,
            "tag": "Customer Favorite"
        },
        {
            "id": 511,
            "image": "  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Extra Lip Tint",
            "description": "Color-enhancing lip balm",
            "totalReview": 470,
            "price": 34,
            "tag": "TRY IT ON",
            "color": "Bare Pink"
        },
        {
            "id": 512,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET7E01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Deluxe Size Soothing Cleansing Oil",
            "totalReview": 14,
            "price": 80
        },
        {
            "id": 513,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPGP01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Mini Soothing Cleansing Oil",
            "description": "On-the-go gentle makeup-dissolving oil",
            "totalReview": 154,
            "price": 15,
            "tag": "Limited Edition"
        },
        {
            "id": 514,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4201_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Soothing Cleansing Oil",
            "description": "Makeup remover and cleanser",
            "totalReview": 154,
            "price": 50,
            "tag": "EXCLUSIVE PRESALE"
        },
        {
            "id": 515,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4201_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Soothing Cleansing Oil",
            "totalReview": 35,
            "price": 32,
            "tag": "New"
        },
        {
            id: 32,
            "justImage": skincare5,
        },
        {
            "id": 516,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCT01_600x600_0.jpg",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Soothing Cleansing Oil",
            "totalReview": 141,
            "price": 50
        },
        {
            "id": 517,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFX201_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Skin Clarifier No. 75",
            "description": "Concentrated pore-clarifying treatment",
            "totalReview": 100,
            "price": 49,
            "tag": "Best Seller"
        },
        {
            "id": 518,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EG7801_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Skin Moisture Solution No. 86 - Intense Rehydration Compound",
            "description": "Water-infused hydrating serum",
            "totalReview": 30,
            "price": 49
        },
        {
            "id": 519,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65R01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Hydrating Face Tonic",
            "description": "Balancing and restoring toner",
            "totalReview": 264,
            "price": 38,
            "tag": "Top-Rated"
        },
        {
            "id": 520,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E42G01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Instant Long-Wear Makeup Remover",
            "description": "Gentle eye-makeup remover",
            "totalReview": 329,
            "price": 33,
            "tag": "Top-Rated"
        },
        {
            "id": 521,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM6701_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Makeup Melter & Cleanser",
            "description": "Gentle foaming makeup remover",
            "totalReview": 98,
            "price": 20
        },
        {
            "id": 522,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EKLT01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Primer Plus Protection SPF 50",
            "description": "Protective face primer",
            "totalReview": 84,
            "price": 40,
            "tag": "Top-Rated"
        },
        {
            "id": 523,
            "image": "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERER01_600x600_0.jpg  ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Extra Repair Moisture Cream Intense Refill",
            "description": "Refill. Reuse. Repeat.",
            "totalReview": 2,
            "price": 85,
            "tag": "New"
        },
        {
            "id": 524,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPHC01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Extra Repair Eye Cream Intense Refill",
            "description": "Skin loving. Planet conscious.",
            "totalReview": 5,
            "price": 68,
            "tag": "New"
        },
        {
            "id": 525,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET7C01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★☆",
            "name": "Deluxe Size Vitamin Enriched Face Base",
            "description": "Moisturizer and primer in one",
            "totalReview": 7,
            "price": 95,
            "tag": "New"
        },
        {
            "id": 526,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERJK03_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★☆☆☆",
            "name": "Mini Extra Illuminating Moisture Balm",
            "description": "Glow big (in a new mini size)",
            "totalReview": 138,
            "price": 30,
            "color": "Pink Glow"
        },
        {
            "id": 527,
            "image": " https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPGN01_600x600_0.jpg ",
            "image2": 'https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E96E49_1080x1080_2.jpg',
            "image3": "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_103075_1080x1080_0.jpg",
            "rating": "★★★★★",
            "name": "Mini Vitamin Enriched Face Base",
            "description": "Oil-free moisturizer and primer",
            "totalReview": 2708,
            "price": 20,
            "tag": "Mini Size"
        }
    ]

    const [data, setData] = useState([...SkincareMappingData]);

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
            setData([...SkincareMappingData])
        }
    }


    return (
        <div>
            <SkincareMappingStyling>
                <div>
                    <img style={{ width: "100vw" }} src={skincare1} alt='' />
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
                    <img src={skincare2} alt='' style={{ width: "100vw", padding: "50px" }} />
                </div>
                <h6 style={{ width: "71%", margin: "auto", paddingBottom: "30px", fontSize: "14px", letterSpacing: "1px" }}>Our best moisturizer face & best skincare products to nourish skin and create the perfect canvas for makeup application. Bobbi's top-rated collection of best moisturizer face & best skincare products infuse skin with luxurious hydration. Discover our best moisturizer face & best skincare products to nourish, hydrate, repair & soothe all skin types.</h6>
            </SkincareMappingStyling>
        </div>
    )
}

export default SkincareMapping