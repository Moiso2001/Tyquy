import {useState} from 'react'

/* Icons */
import {BsArrowLeftCircle} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"


/* Definitions */
import { FormType } from '../../Stepper'
import Plan from './Cards/Plan'

/* Styles */
import styles from "./Third.module.css";

type ThirdProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
    form: {nombre:string, tipo: string}
}

export default function Third({setStep, setForm, form}: ThirdProps) {
    const [disableContinue, setDisableContinue] = useState(true)
    const [plan, setPlan] = useState(form);

    function handlePlanSelect (tipo: string) {
        setDisableContinue(false)
        setPlan(plan => ({...plan, tipo}))
    }

    function updateForm () {
        setForm(form => ({...form, third: plan}))
    }

    function isFocused(name: string){
        if(plan.nombre === name){
            return true
        } else {
            return false
        }
    }
   
  return (
    <div className={styles.div_global}>
        <div className={styles.div_title}>
            <h3>Escoge tu plan</h3>
        </div>

        <div className={styles.div_plan__options}>
            <div
                className={isFocused('office') ? styles.plan__div_office__focus :styles.plan__div_office} 
                onClick={() => setPlan(plan => ({...plan, nombre: 'office'}))}
            >
                <span>Office</span>
            </div>
            <div 
                className={isFocused('spa') ? styles.plan__div_spa__focus : styles.plan__div_spa}
                onClick={() => setPlan(plan => ({...plan, nombre: 'spa'}))}
            >
                <span>Spa</span>
            </div>
            <div
                className={isFocused('hotel') ? styles.plan__div_hotel__focus : styles.plan__div_hotel} 
                onClick={() => setPlan(plan => ({...plan, nombre: 'hotel'}))}
            >
                <span>Hotel</span>
            </div>
        </div>

        {/* Plan */}
        <Plan planName={plan.nombre} handlePlan={handlePlanSelect}/>

        <div className={styles.form__div_page}>
            <BsArrowLeftCircle 
                className={styles.page__leftIcon}
                onClick={() => setStep(step => step - 1)}
            />
            {plan.nombre === 'office' || !plan.nombre
             ? <button 
                className={disableContinue ? styles.form__div_page__button__disabled : styles.form__div_page__button}
                onClick={() => {setStep(step => step + 1); updateForm()}}
                disabled={disableContinue}
               >
                Continuar
               </button>
             : <div>            
                <span>Finaliza tu pago escribiendonos</span>
                <RiWhatsappFill/>
               </div>
            }
        </div>
    </div>
  )
}
