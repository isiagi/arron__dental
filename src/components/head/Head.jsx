import {AiOutlinePhone} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
// import {BsCalendar4Week} from 'react-icons/bs'

import { AiOutlineCalendar } from "react-icons/ai";

import './head.css'

function Head() {
  return (
    <div className="head__container">
        <div className="head__wrapper">
            <div className="head__wrapper1">
               <AiOutlinePhone className="head__icon"/> 
               <p>+256751571025 / +256751571025</p>
            </div>
            <div className="head__wrapper1">
                <GoLocation className="head__icon"/>
                <p>Kawempe Kampala</p>
            </div>
            <div className="head__wrapper1">
                <AiOutlineCalendar className="head__icon"/>
                <p><span>Mon - Fri</span> 8:00am - 5:00pm</p>
            </div>
        </div>
    </div>
  )
}

export default Head