import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import './searchedItem.css'
export const SearchedItem = ({hotelImg,hotelName,hotelBekijken,hotelPrice,hotelRating,hotelId}) => {

    const locate = useLocation();
    const [night,setNight] = useState(locate.state.date);
    const [option,setOption] = useState(locate.state.options);


    let startDateNight = new Date(night[0].startDate).getDate();
    let endDateNight = new Date(night[0].endDate).getDate();
    let nightDiff = endDateNight - startDateNight;

    const navigation = useNavigate();
    const handleHotel = ()=>{
    navigation("/hotel/:",{hotelId})
    }

  return (
    <div className='searchedItem' onClick={handleHotel}>
        <img src={hotelImg} 
        alt="Yoteh Hotel" 
        className="searchItemImg" />
        <div className="siDesc">
            <h1 className="sidescription">{hotelName}</h1>
            <span className="siDistance">2.2 Km from centre</span>
            <span className="siTaxOp">Free AirPort Taxi</span>
            <span className="siSubTitle">Twin Room with Lake View</span>
            <span className="siFeatures">2 twin beds</span>
            <span className="siCancelOp">Free Cancelation</span>
            <span className="siCancelOpSubtitle">You  can cancel at any time you want</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <div className="siRatings">
                    <h1>Excellent</h1>
                    <span>{hotelBekijken} Bekijken</span>
                </div>
                <button>{hotelRating}</button>
            </div>
            <div className="siTaxText">
                {option.Children ===0
                ? <span className="blijf">{nightDiff} nights,{option.Adult} Adults</span>
                : <span className="blijf">{nightDiff} nights,{option.Adult} Adults,{option.Children} Children</span>
                }
                <span className="siPrice">${nightDiff * hotelPrice}</span>
                <span className="siTax">Includes tax and fees</span>
                <button className="seeAvaila">See Availability</button>
            </div>
        </div>
    </div>
  )
}
