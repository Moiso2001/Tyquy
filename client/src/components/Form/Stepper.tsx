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

export type FormType = {
  first: {
    nombre: {
        id: number;
        name: string;
    }[];
    celular: string;
    correo: string;
    direccion: string;
  }
  second: {
    info: {
        id: number;
        name: string;
        raza: string;
        edad: number;
        peso: number;
    }[];
    photos: never[];
  }
  third: {
    plan: {name:string, price: number}[]
  }
}


export default function Stepper() {
  const [helpWindowHidden, setHelpWindowHidden] = useState(true);
  const [step , setStep] = useState(1);

  const [form, setForm] = useState<FormType>({
    first: {
      nombre: [{id: 0, name: ''}],
      celular: '',
      correo: '',
      direccion: ''
    },
    second: {
      info: [{id: 0, name: '', raza: '', edad: 0, peso: 0}],
      photos: []
    },
    third: {
      plan: [{name: '', price: 0}]
    }
  })

  /* This validation will be used to return the correct step depending of the status of the "step" react state */
  const validation = (step: number) => {
    if(step === 1){
      return (
        <First setStep={setStep} form={form.first} setForm={setForm}/>
      )
    }
    if(step === 2){
      return(
        <Second setStep={setStep} setForm={setForm}/>
      )
    }
    if(step === 3){
      return(
        <Third setStep={setStep} setForm={setForm}/>
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
