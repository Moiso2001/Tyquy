import {useState} from 'react'

import {BsArrowLeftCircle} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"
import { FormType } from '../../Stepper'
import { prices } from '../../../../utils/constants'

type PaymentProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
    form: FormType
}

export default function Payment({setStep, setForm, form}: PaymentProps) {
  const recipe = useState({})

  function getPlanPrices () {
    const prices = {total: 0, dogs: [{}]};


  }

  return (
    <div>
      <div>
        <h3>Checkout</h3>
      </div>

      <div>
        <div>
          <div>
            <span></span>
            <hr/>
          </div>

          <div>

          </div>

          <div>
            <span>Total a pagar</span>
            <span></span>
          </div>
        </div>

        <div>
          <div>
            <span>Nombre Completo</span>
            <input/>
          </div>

          <div>
            <span>Email</span>
            <input/>
          </div>

          <div>
            <span>Telefono</span>
            <input/>
          </div>

          <div>
            <span>Direccion</span>
            <input/>
          </div>

          <div>

          </div>
        </div>

        <div>
          <div>
            <input type='checkbox'/>
            <span>Acepta terminos y condiciones del servicio</span>
          </div>

          <div>
            <BsArrowLeftCircle onClick={() => setStep(step => step - 1)}/>
            
            <div>
              <span>Tambien puedes pagar escribiendonos</span>
              <RiWhatsappFill/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
