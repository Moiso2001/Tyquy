/* React */
import {useState, useEffect} from 'react'

/* CSS */
import styles from "./Stepper.module.css"

export default function Stepper() {
  const [step , setStep] = useState(1);
  const [helpWindow, setHelpWindow] = useState(true);

  const [names,setNames] = useState([{id: 0, name: ''}])


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

      {/* Form */}
      <div>
        <div>

        </div>

        <div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
