// import Footer from '../Footer/Footer';
import { Discover } from './Discover';

function DiscoverDataMapping() {
  
  const Discoverdata =[
    {
      id:   1111,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/FH20-Discover-Guides.jpg",
      title:"PRODUCT GUIDES",
      details:"Take the guesswork out of your beauty routine with our curated guides for makeup and skincare.",
      link:"https://m.bobbibrowncosmetics.com/guides",
    },
    {
      id:   2222,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/FH20-Discover-FoundationFinder.jpg",
      title:"FOUNDATION SHADE FINDER",
      details:"Find your skin-true foundation match in just a few clicks.",
      link:"https://m.bobbibrowncosmetics.com/foundation-finder?_step=coverage"
    },
    {
      id:  3333 ,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/FH20-Discover-Loyalty.jpg",
      title:"BOBBI BROWN CLUB",
      details:"Enjoy exclusive perks, earn points when you shop, and get free shipping on every order when you become a member.",
      link:"https://m.bobbibrowncosmetics.com/loyalty-program/bbaccess",
    },
    {
      id:   4444,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/FH20-Discover-Community.jpg",
        title:"BOBBI BROWN COMMUNITY",
        details:"Explore, share, and get inspired by our beauty-loving community of fans",
        link:"https://m.bobbibrowncosmetics.com/social-gallery",
    },
    {
      id:   5555,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/FH20-Discover-OurStory.jpg",
      title:"OUR STORY",
      details:"Then and now: nearly 30 years of true-to-you beauty. Find out where it all began.",
      link:"https://m.bobbibrowncosmetics.com/about-bobbi-brown"
    },
    {
      id:   6666,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/FH20-Discover-Artistry.jpg",
        title:"OUR ARTISTRY EXPERTS",
        details:"Get to know our community of pros: explore their tutorials, see what’s in their kits, and find out what keeps them inspired.",
        link:"https://m.bobbibrowncosmetics.com/pro-artists"
    },
    {
      id:   7777,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/FH20-Discover-PrettyPowerful.jpg",
      title:"PRETTY POWERFUL FUND",
      details:"See how we’ve been working to empower women and girls beyond makeup for nearly 20 years.",
      link:"https://m.bobbibrowncosmetics.com/pretty-powerful-fund"
    },
    {
      id:   8888,
      imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/Discover/BB-DiscoverLP-Ingredients.jpg",
      title:"INGREDIENTS GLOSSARY",
      details:"Learn about the skin-loving ingredients we source to keep you fresh and glowing—from vitamins and minerals to power botanicals, oils, extracts, and more.",
      link:"https://m.bobbibrowncosmetics.com/ingredients-glossary"
    }



]
    return (
      <>
      <div className="DiscoverDataMapping" style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", width:"90vw", margin:"auto", textAlign:"start", gap:"20px"}}>
           {Discoverdata.map((e)=>(<Discover key={e.id} {...e}/>))}
           
      </div>
      <br></br>
      <br></br>
      <br></br>
    
      </>
    );
  }

export default DiscoverDataMapping;
