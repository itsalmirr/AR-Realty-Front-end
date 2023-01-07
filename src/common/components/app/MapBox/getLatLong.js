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
  let address =
    listing.address +
    ' ' +
    listing.city +
    ', ' +
    listing.state +
    ' ' +
    listing.zipcode

  const response = await Geocode.fromAddress(address)

  if (response.status !== 'OK') {
    return
  }

  const { lat, lng } = response.results[0].geometry.location
  setLat(lat)
  setLng(lng)
  setViewport({ ...viewport, latitude: lat, longitude: lng })
  setLoading(false)
}

export default getLatLong
