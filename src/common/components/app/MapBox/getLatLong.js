import Geocode from 'react-geocode'

const getLatLong = async (
  listing,
  setLat,
  setLng,
  viewport,
  setViewport,
  setLoading
) => {
  // Get latitude & longitude from address.
  let response = await Geocode.fromAddress(
    listing.address +
      ' ' +
      listing.city +
      ', ' +
      listing.state +
      ' ' +
      listing.zipcode
  )

  if (response.status !== 'OK') {
    console.error(response)
    return
  }

  const { lat, lng } = response.results[0].geometry.location
  setLat(lat)
  setLng(lng)
  setViewport({ ...viewport, latitude: lat, longitude: lng })
  setLoading(false)
}

export default getLatLong
