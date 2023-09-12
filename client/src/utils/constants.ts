import { OpinionDef, BenefitDef, ServiceDef } from "../types/global"


export const opinions: OpinionDef[] = [{
    id: 1,
    text: 'Estaba nerviosa de dejar solo a Sam con extraños, pero el trato a los perritos y sus hermosas instalaciones hicieron que las dudas se fueran rapidamente.',
    owner: 'Sara P.',
    img: 'https://i.ibb.co/kGKsNx7/image-2.png'
}, {
    id: 2,
    text: 'Shaio es el primero en salir corriendo a su ruta, encariñado de sus cuidadores y de los amiguitos que ha hecho.',
    owner: 'Moises P.',
    img: 'https://i.ibb.co/kGKsNx7/image-2.png'
}, {
    id: 3,
    text: 'Nunca pensé que encontraría un lugar donde mi labrador, Buddy, se sintiera tan feliz y emocionado. Este lugar es como su segundo hogar.',
    owner: 'Lisa M.',
    img: 'https://i.ibb.co/kGKsNx7/image-2.png'
}, {
    id: 4,
    text: 'Traigo a mi bulldog francés, Rocky, a este lugar cada vez que estoy fuera de la ciudad. Los cuidadores son expertos en consentirlo, y eso me da tranquilidad.',
    owner: 'Michael S.',
    img: 'https://i.ibb.co/kGKsNx7/image-2.png'
}]

export const benefits: BenefitDef[] = [{
    id: 1,
    title: 'Ruta puerta a puerta',
    text: 'Nos encargamos de recoger a tu mascota desde tu puerta y llevarla de regreso después de un día lleno de diversión. Nuestra ruta se adapta a tu horario, garantizando la máxima conveniencia para ti.',
    icon: ''
}, {
    id: 2,
    title: 'Red de vigilancia 24 horas',
    text: 'Mantenemos un ojo en tus amigos peludos en todo momento gracias a nuestra red de vigilancia las 24 horas. ¡Puedes acceder a las cámaras desde tu celular para ver cómo se divierten!',
    icon: ''
}, {
    id: 3,
    title: 'Socializacion y Recreacion',
    text: 'Tu mascota disfrutará de tiempo de juego y socialización supervisados por nuestros expertos en cuidado canino. Promovemos un ambiente seguro y divertido para que hagan amigos y se ejerciten.',
    icon: ''
}, {
    id: 4,
    title: 'Espacio cubierto e instalaciones',
    text: 'No importa el clima, nuestros amigos de cuatro patas pueden seguir divirtiéndose en nuestro espacio cubierto y nuestras instalaciones adecuadas. ¡La diversión nunca se detiene!',
    icon: ''
}, {
    id: 5,
    title: 'Reportes por whatsapp',
    text: ' Te mantenemos informado en tiempo real con reportes y noticias importantes sobre tu mascota a través de WhatsApp. Así, estarás siempre al tanto de su bienestar y actividades.',
    icon: ''
}]

export const services: ServiceDef[] =[{
    id: 1,
    title: 'Dog Office',
    img: '',
    text: 'Nuestra guardería canina ofrece un servicio puerta a puerta, cuidando de tu mascota mientras trabajas. Recogemos por la mañana y entregamos por la tarde-noche. ¡Comodidad y seguridad para tu peludo amigo!'
}, {
    id: 2,
    title: 'Dog Hotel',
    img: '',
    text: '¿Necesitas viajar o una noche fuera? Confía en nuestra guardería para el descanso seguro de tu mascota. Responsabilidad y cuidado en un entorno acogedor y tranquilo.'
}, {
    id: 3,
    title: 'Dog Spa',
    img: '',
    text: 'Permítenos cuidar el aseo y pelaje de tu mascota. Te entregamos a tu compañero limpio, radiante y perfumado para llenar tu hogar de un delicioso aroma',
}]