import "./header.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed,faPlane,faCar,faAddressBook,faTaxi, faCalendarDays, faPerson}  from "@fortawesome/free-solid-svg-icons";
import {faSnowflake} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range";
import {useState} from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
export const Header = ({type}) => {
    const [openDate,setOpenDate] =useState(false);
    const [destination,setDestination] = useState("");
    const [date,setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key:'selection'
}]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        Adult:1,
        Children:0,
        Room:1
    });

    const handleOption =(name,operation)=>{
        setOptions(prev=>{return{
            ...prev,[name] : operation ==="+"? options[name] +1:options[name] -1
        }})
    };

    const navigate = useNavigate();

    const handleSearch =()=>{
        navigate("/list",{state:{destination,date,options}});
    }
  return (
    <div className="header">
        <div className={type ==="List" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerLists">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faAddressBook} />
                    <span>Flight + Hotel</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faSnowflake} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                </div>
            </div>
            { type !=="List" && <>
            <h1 className="headerTitle">
            A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDescrption">Get rewarded for your travels – unlock instant savings of 10% or more with a free SayGonBooking.com account</p>
            <button className="headerBtn">Sign In/Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" className="headerInput" onChange={(e)=>setDestination(e.target.value)} placeholder="Where are you going?" />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM-dd-yyyy")} to ${format(date[0].endDate,"MM-dd-yyyy")}`}</span>
                    {openDate && <DateRange minDate={new Date()} className="date" editableDateInputs={true} onChange={item =>setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}/>}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.Adult} Adult . ${options.Children} Children . ${options.Room} room`}</span>
                    { openOptions && <div className="options">
                        <div className="optionItems">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button disabled={options.Adult <=1} className="optionCounterButton" onClick={()=>handleOption("Adult","-")}>-</button>
                                <span className="optionCounterNumber">{options.Adult}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("Adult","+")}>+</button>
                            </div>
                        </div>
                        <div className="optionItems">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button disabled={options.Children <=0} className="optionCounterButton" onClick={()=>handleOption("Children","-")}>-</button>
                                <span className="optionCounterNumber">{options.Children}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("Children","+")}>+</button>
                            </div>
                        </div>
                        <div className="optionItems">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button disabled={options.Room <=1} className="optionCounterButton" onClick={()=>handleOption("Room","-")}>-</button>
                                <span className="optionCounterNumber">{options.Room}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("Room","+")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></>
}        </div>
    </div>
  )
}

