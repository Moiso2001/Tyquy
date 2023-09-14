/* React */
import {useMemo} from 'react'

/* Google API */
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

/* CSS */
import styles from "./Map.module.css";

/* Icons and images */
import runeTexture from "../../assets/tribu decoration/runeTexture.png"
import muiscaMask from "../../assets/tribu decoration/muiscaMask.png"

export default function Map() {
  const {isLoaded} = useLoadScript({googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY})
  const center = useMemo(() => ({lat: 4.686122, lng: -73.941499}),[])

  return (
    <div className={styles.div_global}>
        {/* Muisca head */}
        <img src={muiscaMask} className={styles.global__mask}/>
        <img src={runeTexture} className={styles.global__texture}/>
        
        {/* Head */}
        <div className={styles.div_title}>
            <h3>Visitanos :)</h3>
        </div>

        {/* Map Google */}
        {
          !isLoaded
          ? <div><span>Loading...</span></div>
          : <GoogleMap
              zoom={15}
              center={center}
              mapContainerClassName={styles.map}
              // mapContainerStyle={{ width: '100%', height: '400px'}} 
            >
             <MarkerF key={1} position={center}/> 
            </GoogleMap>
        }
    </div>
  )
}


