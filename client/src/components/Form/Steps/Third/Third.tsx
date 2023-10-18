import {useState} from 'react'

import {BsArrowLeftCircle} from "react-icons/bs"

type ThirdProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Third({setStep}: ThirdProps) {

    const [plan, setPlan] = useState({})


  return (
    <div>
        <div>
            <h3>Escoge tu plan</h3>
        </div>

        <div>
            <div>
                <div>
                    <span>Office</span>
                </div>
                <div>
                    <span>Spa</span>
                </div>
                <div>
                    <span>Hotel</span>
                </div>
            </div>

            <div>
                <div>
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
                <div>
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
                <div>
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
            <span onClick={() => setStep(step => step + 1)}>Continuar</span>
        </div>
    </div>
  )
}
