import {useState} from 'react'

/* Icons */
import {BsArrowLeftCircle} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"


/* Definitions */
import { FormType } from '../../Stepper'

type ThirdProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
    form: {nombre:string, tipo: string}
}

export default function Third({setStep, setForm, form}: ThirdProps) {
    const [plan, setPlan] = useState(form);

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

            <div>
                <div onClick={() => setPlan(plan => ({...plan, tipo: 'esencial'}))}>
                    <img/>
                    <div>
                        <div>
                            <span>Plan Esencial</span>
                            <span>2 dias/semana</span>
                        </div>
                        <p>
                            ¿Necesitas cuidado ocasional para tu perro? Elige nuestro 
                            "Plan Esencial" para 2 días a la semana. Tu peludito 
                            disfrutará de atención y diversión mientras tú te ocupas 
                            de tus asuntos.
                        </p>
                    </div>                    
                </div>
                <div onClick={() => setPlan(plan => ({...plan, tipo: 'estandard'}))}>
                    <img/>
                    <div>
                        <div>
                            <span>Plan Estandar</span>
                            <span>3 dias/semmana</span>
                        </div>
                        <p>
                            ¿Buscas un equilibrio entre cuidado y comodidad? 
                            Nuestro "Plan Estándar" de 3 días a la semana 
                            ofrece actividades y cuidado de calidad para tu 
                            perro mientras tú sigues tu rutina.
                        </p>
                    </div>
                </div>
                <div onClick={() => setPlan(plan => ({...plan, tipo: 'premium'}))}>
                    <img/>
                    <div>
                        <div>
                            <span>Plan Premium</span>
                            <span>5 dias/semana</span>
                        </div> 
                        <p>
                            ¿Deseas lo mejor para tu amigo peludo? Nuestro 
                            "Plan Premium" de 5 días a la semana garantiza 
                            una experiencia de guardería completa con atención
                            constante y actividades emocionantes. 
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <BsArrowLeftCircle onClick={() => setStep(step => step - 1)}/>
            {plan.nombre === 'office' || !plan.nombre
             ? <span onClick={() => {setStep(step => step + 1); updateForm()}}>Continuar</span>
             : <div>            
                <span>Finaliza tu pago escribiendonos</span>
                <RiWhatsappFill/>
               </div>
            }
        </div>
    </div>
  )
}
