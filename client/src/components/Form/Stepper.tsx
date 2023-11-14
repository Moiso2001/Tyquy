/* React */
import {useState} from 'react'

import { v4 as uuidv4 } from 'uuid';

/* CSS */
import styles from "./Stepper.module.css"

/* Components */
// import HelpWindow from './Steps/HelpWindow/HelpWindow';
import Payment from './Steps/Payment/Payment';
import Second from './Steps/Second/Second';
import Third from './Steps/Third/Third';
import First from './Steps/First/First';
import Final from './Steps/Final/Final';

/* Lottie */
import Lottie from "lottie-react";

import dogWalking from "../../assets/lottie/dog_walking_step.json";
import trees from "../../assets/lottie/trees.json";

export type FormType = {
  first: {
    nombre: string;
    celular: string;
    correo: string;
    direccion: string;
  }
  second: {
    info: {
        id: string;
        name: string;
        raza: string;
        edad: string;
        peso: string;
    }[];
    photos: never[];
  }
  third: {nombre:string, tipo: string}
}


export default function Stepper() {
  const [step , setStep] = useState(1);

  const [form, setForm] = useState<FormType>({
    first: {
      nombre: '',
      celular: '',
      correo: '',
      direccion: ''
    },
    second: {
      info: [{id: uuidv4(), name: '', raza: '', edad: "0", peso: "0"}],
      photos: []
    },
    third: {nombre: 'office', tipo: ''},
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
        <Second setStep={setStep} setForm={setForm} form={form.second}/>
      )
    }
    if(step === 3){
      return(
        <Third setStep={setStep} setForm={setForm} form={form.third}/>
      )
    }
    if(step === 4){
      return(
        <Payment setStep={setStep}setForm={setForm} form={form}/>
      )
    }
    if(step === 5){
      return(
        <Final/>
      )
    }
  }

  function lottiePositionStyle (type: string): string {
    if(type === 'dog'){
      if(step === 1) return "3%";
      if(step === 2) return "29%";
      if(step === 3) return "53%";
      if(step === 4) return "75%";
      if(step === 5) return "40%"
      else{
        return "5%"
      }
    } else if(type === 'tree'){
      if(step < 5){
        return "0"
      } else if(step >= 5){
        return "35%"
      } else {
        return "0"
      }
    } else {
      return "0"
    }
  }

  return (  
    <div className={styles.div_global}>
      {/* Steps */}
      <div className={styles.div_steps}>
        <div className={styles.steps__div_animations}>
          <Lottie 
            animationData={dogWalking} 
            className={`${styles.animation__dog} dog${step}`}
            style={{marginLeft: lottiePositionStyle('dog')}}
          />
          <Lottie 
            animationData={trees} 
            loop={false} 
            className={styles.animation__tree}
            style={{marginRight: lottiePositionStyle('tree')}}
          />
        </div>

        {step < 5 && 
          <div className={styles.steps__div_bar}>
            <div className={step >= 1 ? styles.bar_active : styles.bar}/>
            <div className={step >= 2 ? styles.bar_active : styles.bar}/>
            <div className={step >= 3 ? styles.bar_active : styles.bar}/>
            <div className={step >= 4 ? styles.bar_active : styles.bar}/>
          </div>
        }
        {step >= 5 && 
          <div className={styles.steps__div_bar}>
            <div className={styles.bar_active__complete}/>
          </div>
        }

        <div className={styles.steps__div_span}>
          <span>{`Paso ${step} de 4`}</span>
        </div>
      </div>

      {/* HelpWindow */}
      <div>
        {/* <HelpWindow/> */}
      </div>

      {/* Form */}
      <div className={styles.div__form}>
        {validation(step)}
      </div>

    </div>
  )
}
