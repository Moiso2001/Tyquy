import React from 'react'

/* Icons */
import {ImMail4} from "react-icons/im";
import {BsFillTelephoneFill, BsClock, BsInstagram, BsWhatsapp} from "react-icons/bs";

export default function Footer() {
  return (
    <div>
        <div>
            <img/>
        </div>

        <div>
            <span>©2023  Tyquy Bayara</span>
            <span>Todos los derechos reservados</span>
        </div>

        <div>
            <div>
                <ImMail4/>
                <span>tyquybayarapet@gmail.com</span>
            </div>
            <div>
                <BsFillTelephoneFill/>
                <span>+57 3002343569</span>
            </div>
            <div>
                <BsClock/>
                <div>
                    <div>
                        <span>Lunes - Sabados:</span>
                        <span>7:00am - 7:00pm</span>
                    </div>
                    <div>
                        <span>Domingos:</span>
                        <span>10:00am - 4:00pm</span>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div>
                <h3>Siguenos en nuestras redes</h3>
            </div>
            <div>
                <BsInstagram/>
                {/* Linktree */}
                <BsWhatsapp/>
            </div>
        </div>
    </div>
  )
}
