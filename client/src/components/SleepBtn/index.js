

import React, {useState} from "react";
import {sleepWake} from '../../utils/API'
import "./style.css";


function SleepBtn() {
    const [sleepTime, setSleepTime] = useState (Date.now);
    const [buttonText, setButtonText] = useState("Sleep");
     //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

return  <button onClick={() => setButtonText("Wake Up")}>{buttonText}</button>

}

export default SleepBtn;

