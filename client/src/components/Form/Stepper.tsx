/* React */
import {useState, useEffect} from 'react'

/* CSS */
import styles from "./Stepper.module.css"
import First from './Steps/First/First';
import Second from './Steps/Second/Second';
import Third from './Steps/Third/Third';
import Payment from './Steps/Payment/Payment';
import Final from './Steps/Final/Final';
import HelpWindow from './Steps/HelpWindow/HelpWindow';


export default function Stepper() {
  const [helpWindowHidden, setHelpWindowHidden] = useState(true);
  const [step , setStep] = useState(1);

  const [form, setForm] = useState({
    first: {
      
    }
  })



  /* This validation will be used to return the correct step depending of the status of the "step" react state */
  const validation = (step: number) => {
    if(step === 1){
      return (
        <First setStep={setStep}/>
      )
    }
    if(step === 2){
      return(
        <Second setStep={setStep}/>
      )
    }
    if(step === 3){
      return(
        <Third setStep={setStep}/>
      )
    }
    if(step === 4){
      return(
        <Payment setStep={setStep}/>
      )
    }
    if(step === 5){
      return(
        <Final/>
      )
    }
  }


  return (  
    <div className={styles.divGlobal}>
      {/* Steps */}
      <div>
        <div>

        </div>

        <div>
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
      </div>

      {/* HelpWindow */}
      <HelpWindow hidden={helpWindowHidden}/>

      {/* Form */}
      <div>
        {validation(step)}
      </div>

    </div>
  )
}
