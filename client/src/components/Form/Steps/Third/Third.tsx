import {useState} from 'react'

/* Icons */
import {BsArrowLeftCircle} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"


/* Definitions */
import { FormType } from '../../Stepper'
import Plan from './Cards/Plan'

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
   
  return (
    <div>
        <div>
            <h3>Escoge tu plan</h3>
        </div>

        <div>
            <div>
                <div onClick={() => setPlan(plan => ({...plan, nombre: 'office'}))}>
                    <span>Office</span>
                </div>
                <div onClick={() => setPlan(plan => ({...plan, nombre: 'spa'}))}>
                    <span>Spa</span>
                </div>
                <div onClick={() => setPlan(plan => ({...plan, nombre: 'hotel'}))}>
                    <span>Hotel</span>
                </div>
            </div>
        </div>

        {/* Plan */}
        <Plan planName={plan.nombre} handlePlan={handlePlanSelect}/>

        <div>
            <BsArrowLeftCircle onClick={() => setStep(step => step - 1)}/>
            {plan.nombre === 'office' || !plan.nombre
             ? <button 
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
