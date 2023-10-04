/* React */
import {useState, useEffect} from 'react'

/* Each form step */
// import Payment from './Steps/Payment';
// import Second from './Steps/Second';
// import First from './Steps/First';
// import Third from './Steps/Third';

/* React Icons */
import {IoMdHelpCircle} from "react-icons/io";
// import { InputRequest } from '../../App';

/* CSS */
import s from "./Stepper.module.css";
// import HelpWindow from './Steps/HelpWindow';


export default function Stepper() {
  const [step , setStep] = useState(1);
  const [helpWindow, setHelpWindow] = useState(true);


  /* This validation will be used to return the correct step depending of the status of the "step" react state */
  const validation = (step: number) => {
    if(step === 1){
    //   return (
    //     // <First setStep={setStep} setResponse={handleResponse} inputExisted={response.first}/>
    //   )
    }
    if(step === 2){
    //   return(
    //     // <Second setStep={setStep} setResponse={handleResponse} inputExisted={response.second}/>
    //   )
    }
    if(step === 3){
    //   return(
    //     // <Third setStep={setStep} setResponse={handleResponse} inputExisted={response.third}/>
    //   )
    }
    if(step === 4){
    //   return(
    //     // <Payment setStep={setStep} sendResponse={sendResponse}/>
    //   )
    }
  }


  return (  
    <div className={s.divGlobal}>

      {/* This will be the head of our stepper, where the user will see the step on and a charge bar */}
      <div className={s.divHeader}>
        <div className={s.divStep}>
          <span>{`Paso ${step} de 4`}</span>
          <IoMdHelpCircle className={s.helpIcon} onClick={() => setHelpWindow(true)}/>
        </div>

        <div className={s.divBar}>
          <div className={step >= 1 ? s.barActive : s.bar}></div>
          <div className={step >= 2 ? s.barActive : s.bar}></div>
          <div className={step >= 3 ? s.barActive : s.bar}></div>
          <div className={step >= 4 ? s.barActive : s.bar}></div>
        </div>
      </div>

      {/* This will be the help window */}
      {helpWindow &&
        // <HelpWindow setHelpWindow={setHelpWindow}/>
      }

      {/* This validation will return the slides depending of the step */}
      {validation(step)}

    </div>
  )
}
