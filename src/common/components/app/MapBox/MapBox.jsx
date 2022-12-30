import Geocode from 'react-geocode'
import { useState, useEffect } from 'react'
import { MdLocationPin } from 'react-icons/md'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import getLatLong from './getLatLong'
import { MAPBOX_API_TOKEN, GOOGLE_MAP_API } from '@lib/constants'

const MapBox = ({ listing }) => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: '100%',
    height: '500px',
    zoom: 14,
  })

  useEffect(() => {
    // Get latitude & longitude from address.
    // Path: src/common/components/app/MapBox/getLatLong.js
    getLatLong(listing, setLat, setLng, viewport, setViewport, setLoading)
  }, [listing])
  Geocode.setApiKey(GOOGLE_MAP_API)

  if (loading) return false

  return (
    <ReactMapGl
      {...viewport}
      mapboxAccessToken={MAPBOX_API_TOKEN}
      style={{ width: '100%', height: '400px', borderRadius: '10px' }}
      mapStyle='mapbox://styles/iamalmiir/cku1m1arj14zp17pkfa7mzz62'
      onMouseOver={(viewport) => setViewport(viewport)}
    >
      <Marker key={listing.id} latitude={lat} longitude={lng}>
        <MdLocationPin className='h-6 w-6 text-red-500' aria-hidden='true' />
      </Marker>
    </ReactMapGl>
  )
}

export default MapBox
