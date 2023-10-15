import React from 'react'

type PaymentProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Payment({setStep}: PaymentProps) {
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
            
          </div>
        </div>
      </div>
    </div>
  )
}
