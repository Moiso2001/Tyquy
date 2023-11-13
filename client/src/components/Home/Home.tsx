// import React from 'react'

/* Componetns */
import Services from '../Services/Services';
import Prices from '../Prices/Prices';
import Rules from '../Rules/Rules';
import Head from '../Head/Head';
import Why from '../Why/Why';
import FAQ from '../FAQ/FAQ';



export default function Home() {
  return (
    <div>
      <Head/>
      <Why/>
      <Services/>
      <Prices/>
      <Rules/>
      <FAQ/>
    </div>
  )
}
