import { ImgHTMLAttributes } from "react"

export type OpinionDef = {
    text: string
    owner: string
    img: string
    id: number
}

export type BenefitDef = {
    id: number
    title: string
    text: string
    icon: string
}

export type ServiceDef = {
    id: number
    title: string
    text: string
    img: string
}

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
    receipt: {
      total: number;
      title: string;
      dogs: {
        line: string;
        price: number;
      }[];
    }
  }