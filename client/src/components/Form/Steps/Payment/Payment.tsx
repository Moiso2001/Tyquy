import {useState, useEffect} from 'react'

/* Icons */
import {BsArrowLeftCircle} from "react-icons/bs"

/* Styles */
import styles from "./Payment.module.css"

/* Types */
import { FormType } from '../../../../types/global'

/* Utils */
import { convertNumberToPrice } from '../../../../utils/controller'
import { prices } from '../../../../utils/constants'

type PaymentProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
    form: FormType
    sendWhatsapp: Function
}

type Receipt = {
    total: number;
    title: string;
    dogs: {
      line: string;
      price: number;
    }[];
}


export default function Payment({setStep, setForm, form, sendWhatsapp}: PaymentProps) {
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
  
    function getDogLine (dog: { id: string; name: string; raza: string; edad: string; peso: string;}, index: number) {
      const planPrices = prices[index];
      const pesoInNumber = Number(dog.peso)
  
      let tamaño = ''
      let price = 0
  
       if(pesoInNumber <= 10) {
        tamaño = 'Pequeño'
        price = planPrices.pequeño 
       } else if(pesoInNumber > 10 && pesoInNumber <= 20){
        tamaño = 'Mediano'
        price = planPrices.mediano
       } else if(pesoInNumber > 20 && pesoInNumber <= 30){
        tamaño = 'Grande'
        price = planPrices.grande
       } else if(pesoInNumber > 30){
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

  useEffect(() => {
    setForm(form => ({...form, receipt}))
  }, [receipt])

  return (
    <div className={styles.div_global}>
      <div>
        <h3>Checkout</h3>
      </div>

      <div className={styles.div_info}>
        <div>
          <div>
            <div className={styles.info__div_header}>
              <span className={styles.header__span1}>1 {receipt.title}</span>
              <span className={styles.header__span2}>${convertNumberToPrice(receipt.total)} COP/mes</span>
            </div>
            <hr className={styles.info__hr}/>
          </div>

          <div className={styles.info__div_body}>
            <ul className={styles.body__ul}>
              {receipt.dogs.map(dog => 
                <li className={styles.body__li}>
                  <div className={styles.body__div_span}>
                    <span className={styles.li__span1}>{dog.line}</span>
                    <span className={styles.li__span2}>${convertNumberToPrice(dog.price)} COP/mes</span>
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div className={styles.info__div_total}>
            <span className={styles.total__span}>Total a pagar</span>
            <span className={styles.total__span}>${convertNumberToPrice(receipt.total)} COP/mes</span>
          </div>
        </div>

        <div className={styles.info__div_footer}>
          <div className={styles.footer__div_checkbox}>
            <input type='checkbox' checked={true}/>
            <span>Al enviar la informacion se aceptan terminos y condiciones del servicio</span>
          </div>

          <div className={styles.footer__div_buttons}>
            <BsArrowLeftCircle 
              className={styles.page__leftIcon}
              onClick={() => setStep(step => step - 1)}
            />
            
            <div 
              className={styles.form__div_page__button}
              onClick={() => {{setStep(step => step + 1); sendWhatsapp()}}}
            >
              <span>Enviar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
