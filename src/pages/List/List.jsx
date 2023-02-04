import React, { useState } from 'react'
import './list.css'
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/NavBar/Navbar';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { faSearch, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { SearchedItem } from '../../components/SearchedItem/SearchedItem';

export const List = () => {


  const location = useLocation();

  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [options,setOptions] = useState(location.state.options);
  const [checkInDate,setCheckInDate] = useState(false);
  const [checkOutDate,setCheckOutDate] = useState(false);
  const [openOptions,setOpenOptions] =useState(false);

  let endDate = new Date(date[0].endDate).getDate();
  let startDate = new Date(date[0].startDate).getDate();
  let diffrenceDate = endDate - startDate;


  
  const handleOption=(name,operation)=>{
    setOptions((prev)=>{return{
      ...prev,[name]:operation ==='+'?options[name] +1  :options[name] -1
    }})
  }


  const Hotels =[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square200/232845478.webp?k=819ab62b8876e65afd21c66303a06251766ce3ec6778d10738ffecfdf58161f4&o=&s=1",
      HotelName:"G Experience Hotel",
      Bekijken:1173,
      Price:50,
      rating:8.6,
      id:1
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square200/327045690.webp?k=74494cb8e7723cd26780c2de763a037a8a7d6d2de287093590c1357ae33dfbeb&o=&s=1",
      HotelName:"Conservatorium Hotel",
      Bekijken:358,
      Price:76,
      rating:8.1,
      id:2
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square200/133145398.webp?k=77d3fa220053df4ce6345dd45301c6e338daf6882ecced9c340547e3724e9dca&o=&s=1",
      HotelName:"Renaissance Amsterdam Hotel",
      Bekijken:968,
      Price:100,
      rating:7.9,
      id:3
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square200/305247204.webp?k=e6859d8343f7baab9160f9f9486de2c03d96190ab8fa49e9272ebd4a793aa0f8&o=&s=1",
      HotelName:"Amsterdam Downtown Hotel",
      Bekijken:3908,
      Price:56,
      rating:7.6,
      id:4
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square200/232845478.webp?k=819ab62b8876e65afd21c66303a06251766ce3ec6778d10738ffecfdf58161f4&o=&s=1",
      HotelName:"Park Inn by Radisson Amsterdam City West",
      Bekijken:19000,
      Price:119,
      rating:9.6,
      id:5
    }

  ]

  return (
    <div>
      <Navbar/>
      <Header type ="List"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="" className="description">Description</label>
              <div className="lsItemSearch">
                  <FontAwesomeIcon icon={faSearch}/>
                  <input type="text" value={destination} onChange={e=>setDestination(e.target.value)} />
              </div> 
            </div>
            <div className="lsItem">
              <label htmlFor="" className="description">Check-in Date</label>
              <div className="lsItemLabels">
                <FontAwesomeIcon icon={faCalendarDays} className='lsItemIcon'/>
                <span onClick={()=>setCheckInDate(!checkInDate)}>{`${format(date[0].startDate,"MM-dd-yyyy")}`} </span>
                {checkInDate && (<DateRange className='dateIn' editableDateInputs={true} minDate={new Date()} onChange={item=>setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}/>)}
              </div>
              
            </div>
            <div className="lsItem">
              <label htmlFor="" className="description">Check-out Date</label>
              <div className="lsItemLabels">
              <FontAwesomeIcon icon={faCalendarDays} className='lsItemIcon'/>
              <span onClick={()=>setCheckOutDate(!checkOutDate)}>{`${format(date[0].endDate,"MM-dd-yyyy")}`}</span>
              {checkOutDate && (<DateRange className='dateOut' editableDateInputs={true} minDate={new Date()} onChange={item=>setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}/>)}
              </div>
              
            </div>
            <div className="lsItem">
              <label>{diffrenceDate}-Night Stay</label>
            </div>
            <div className="lsItem">
              <span onClick={()=>setOpenOptions(!openOptions)}>{`${options.Adult} Adults .${options.Children} Children .${options.Room} Room`}</span>
              { openOptions && (<div className="optionss">
                        <div className="optionItemss">
                            <span className="optionTexts">Adult</span>
                            <div className="optionCounters">
                                <button disabled={options.Adult <=1} className="optionCounterButtons" onClick={()=>handleOption("Adult","-")}>-</button>
                                <span className="optionCounterNumbers">{options.Adult}</span>
                                <button className="optionCounterButtons" onClick={()=>handleOption("Adult","+")}>+</button>
                            </div>
                        </div>
                        <div className="optionItemss">
                            <span className="optionTexts">Children</span>
                            <div className="optionCounters">
                                <button disabled={options.Children <=0} className="optionCounterButtons" onClick={()=>handleOption("Children","-")}>-</button>
                                <span className="optionCounterNumbers">{options.Children}</span>
                                <button className="optionCounterButtons" onClick={()=>handleOption("Children","+")}>+</button>
                            </div>
                        </div>
                        <div className="optionItemss">
                            <span className="optionTexts">Room</span>
                            <div className="optionCounters">
                                <button disabled={options.Room <=1} className="optionCounterButtons" onClick={()=>handleOption("Room","-")}>-</button>
                                <span className="optionCounterNumbers">{options.Room}</span>
                                <button className="optionCounterButtons" onClick={()=>handleOption("Room","+")}>+</button>
                            </div>
                        </div>
                    </div>)}

            </div>
          <button>Search</button>
          </div>
          <div className="listResult">
            {
              Hotels.map(hotel=>(
                <SearchedItem 
                hotelImg={hotel.src} 
                hotelName={hotel.HotelName} 
                hotelBekijken ={hotel.Bekijken} 
                hotelPrice={hotel.Price}
                hotelRating={hotel.rating}
                hotelId={hotel.id}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
