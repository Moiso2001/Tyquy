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