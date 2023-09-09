import { ImgHTMLAttributes } from "react"

export type Opinion = {
    text: string
    owner: string
    img: string
    id: number
}

export type Service = {
    id: number
    title: string
    text: string
    icon: string
}