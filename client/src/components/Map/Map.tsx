/* React */
import {useMemo} from 'react'

/* Google API */
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"


export default function Map() {
  const {isLoaded} = useLoadScript({googleMapsApiKey: proc})


  return (
    <div>
        {/* Muisca head */}
        
        {/* Head */}
        <div>
            <h3>Visitanos :)</h3>
        </div>

        {/* Map Google */}
        {
          !isLoaded
          ? <div><span>Loading...</span></div>
          : <GoogleMap
              zoom={15}
              center={{lat: 4.686122, lng: -73.941499}}
              mapContainerStyle={{ width: '50%', height: '400px'}} 
            >
             <MarkerF key={1} position={{lat: 4.686122, lng: -73.941499}}/> 
            </GoogleMap>
        }
    </div>
  )
}


