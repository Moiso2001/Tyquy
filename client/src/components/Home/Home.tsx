// import React from 'react'

/* Componetns */
import Services from '../Services/Services';
import Head from '../Head/Head';
import Why from '../Why/Why';
import Prices from '../Prices/Prices';
import Rules from '../Rules/Rules';
import Map from '../Map/Map';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head/>
      <Why/>
      <Services/>
      <Prices/>
      <Rules/>
      <Map/>
      <FAQ/>
      <Footer/>
    </div>
  )
}
