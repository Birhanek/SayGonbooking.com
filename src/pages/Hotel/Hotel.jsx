import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './hotel.css';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FooterList } from '../../components/Footer/FooterList';
import { Header } from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { MailList } from '../../components/Mail/MailList';
import { useState } from 'react';

export const Hotel = () => {

  const [slideN,setSlideN]=useState(0);
  const [open,setOpen] = useState(false);
  const Photos =[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349294205.jpg?k=8c7fe3d6797221206b29db7f1c7c41d811d0c292766c6fd68bb628695d56126b&o=&hp=1",
      alt:"Amsteram Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349290494.jpg?k=f0d29cba01d0d5c5fce059ad0ee6973292ee1758e4003d51b805c067bb807c10&o=&hp=1",
      alt:"Pickok Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349307815.jpg?k=e3cd6ee3d73b776ac0e1680ff2b082563e08c558a339329912bb322b4afce248&o=&hp=1",
      alt:"Birds Eyeview Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349293517.jpg?k=26855254811a47785377456ea03c0492a4541c41d444d1a750932def4c0f2b64&o=&hp=1",
      alt:"Radison Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349293521.jpg?k=743ca05d658b9f1b62f831eace0133897d9d74cb59a9e2a9a836e104b1570cca&o=&hp=1",
      alt:"Hayat Regency Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349291051.jpg?k=e09775a3ded9220c21c7aba687c05e9e2aa6804e95b443b0fd9f5e878ae32f7b&o=&hp=1",
      alt:"InterContinental Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349293256.jpg?k=b8bf7abdc02fb24101545bc30557de0ad9b2ebfff9468878daa9fe56d23f5c08&o=&hp=1",
      alt:"Capital Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349291076.jpg?k=ea4443ce9f3e03a5cf4bfc557e49fec6e3a3000e64599075ef5f44425afff57f&o=&hp=1",
      alt:"Euro Hotel"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/349291115.jpg?k=e7e43e7b41658fb0e14ee125a97eee16e8f38a04c68c7ec708d561ddf0931e53&o=&hp=1",
      alt:"De Mensen Hotel"
    }
  ];

  const handleOpen =(i)=>{
    setSlideN(i);
    setOpen(true);
  };

  const handleMove =(direction)=>{
    let newSlidN;
    if(direction ==="l"){
      newSlidN = slideN === 0 ? 5 : slideN -1;
    }
    else{
      newSlidN = slideN === 5 ? 0 : slideN +1;
    }
    setSlideN(newSlidN);
  }
  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="slideWrapper">
              <img src={Photos[slideN].src} alt="" className="slidImg"/>
            </div>  
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <div className="hotelBook">
            <h1 className="hotelTitle">Park Plaza Victoria Amsterdam</h1>
            <button className="bookNow">Reserve Now</button>
          </div>
          <div className="hotelAddress">
            <FontAwesomeIcon className="locationIcon" icon={faLocationDot}/>
            <span>Elton St 125 Amsterdam</span>
          </div>
          <span className='hotelDistance'>Excellent Location - 500 Meter from Center</span>
          <span className="hotelPrice">Stay at this hotel @ $234 and get free airport taxi</span>
          <div className="hotelImags">
            {Photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img 
                 onClick={()=>handleOpen(i)}
                 src={photo.src}
                 alt={photo.alt} 
                 className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
              <div className="hotelDetailTexts">
                  <h1 className="hotelTitle">Park Plaza Victoria Amsterdam</h1>
                  <p className="hotelDesc">
                  Park Plaza Victoria Amsterdam is located in a historical building opposite Amsterdam Central Station. It features an indoor pool area, sauna facilities and brasserie with focus on quality Dutch food.

                  This 4-star hotel offers well-appointed guest rooms. They are decorated with warm colors and large windows. Each room has a private bathroom with a bath or shower, air conditioning and coffee/tea facilities.

                  The contemporary designed restaurant offers all-day dining serving international cuisine with Dutch influences. A breakfast buffet is also served. Guests can enjoy homemade pastries, freshly brewed coffee and a smooth jazz soundtrack at VIC's BAR. A selection of international spirits, local beers and enticing à la carte dishes is also available.

                  Park Plaza Victoria Amsterdam is located at walking distance from Dam Square and the Royal Palace. Schiphol Airport is just 15 minutes by train and 20 minutes by car.

                  This is our guests' favorite part of Amsterdam, according to independent reviews.

                  Families in particular like the location – they rated it 9.4 for a stay with kids.
                  </p>
              </div>
              <div className="hotelDetailPrice">
                <h1>Perfect for a 9-Night blijven</h1>
                <span>
                Located in the heart of Amsterdam, this hotel has an excellent location score of 9.5
                </span>
                <button><span>$345 (9 Nights)</span>Book Your Hotel Now</button>
              </div>
          </div>

        </div>
      </div>
      <MailList/>
      <FooterList/>
    </div>
  )
}
