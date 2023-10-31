import {useState, useEffect} from 'react'

/* Icons */
import {BsArrowLeftCircle} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"

/* Types */
import { FormType } from '../../Stepper'

/* Utils */
import { prices } from '../../../../utils/constants'
import { convertNumberToPrice } from '../../../../utils/controller'

type PaymentProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
    form: FormType
}

type Receipt = {
    total: number;
    title: string;
    dogs: {
      line: string;
      price: number;
    }[];
}


export default function Payment({setStep, setForm, form}: PaymentProps) {
  const [receipt, setReceipt] = useState<Receipt>({total: 0, title: '', dogs: []})

  function getPlanReceipt () {
    let dogs = form.second.info;
    const tipoDePlan = form.third.tipo

    let planInfo = {index: 0, name: ''}

    if(tipoDePlan === 'esencial'){
      planInfo = {index: 0, name: 'Plan Esencial - 2dias/semana'}
    }else if(tipoDePlan === 'estandard'){
      planInfo = {index: 1, name: 'Plan Estandard - 3dias/semana'}
    }else if(tipoDePlan === 'premium'){
      planInfo = {index: 2, name: 'Plan Premium - 5dias/semana'}
    }

   
    const dogsLine = dogs.map(dog => getDogLine(dog, planInfo.index)) 
    const receiptTotal = getTotal(dogsLine)

    setReceipt({total: receiptTotal, title: planInfo.name, dogs: dogsLine})

    function getTotal (dogs: {line: string; price: number;}[]) {
      let total = 0;
  
      dogs.map(dog => total = total + dog.price)
      
      return total
    }
  
    function getDogLine (dog: { id: number; name: string; raza: string; edad: number; peso: number;}, index: number) {
      const planPrices = prices[index];
  
      let tamaño = ''
      let price = 0
  
       if(dog.peso <= 10) {
        tamaño = 'Pequeño'
        price = planPrices.pequeño 
       } else if(dog.peso > 10 && dog.peso <= 20){
        tamaño = 'Mediano'
        price = planPrices.mediano
       } else if(dog.peso > 20 && dog.peso <= 30){
        tamaño = 'Grande'
        price = planPrices.grande
       } else if(dog.peso > 30){
        tamaño = 'Enorme'
        price = planPrices.enorme
       }
  
       return {
        line: `${dog.name} (${dog.raza} - ${dog.peso}KG) - ${tamaño}`,
        price: price
      } 
    }
  }

  useEffect(() => {
    getPlanReceipt()
  },[])

  return (
    <div>
      <div>
        <h3>Checkout</h3>
      </div>

      <div>
        <div>
          <div>
            <div>
              <span>1 {receipt.title}</span>
              <span>${convertNumberToPrice(receipt.total)} COP/mes</span>
            </div>
            <hr/>
          </div>

          <div>
            <ul>
              {receipt.dogs.map(dog => 
                <li>
                  <span>{dog.line}</span>
                  <span>${convertNumberToPrice(dog.price)} COP/mes</span>
                </li>
              )}
            </ul>
          </div>

          <div>
            <span>Total a pagar</span>
            <span>${convertNumberToPrice(receipt.total)} COP/mes</span>
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
