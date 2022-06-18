import AOS from 'aos'
import { useEffect } from 'react'

const FeaturedListings = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      mirror: true,
      delay: 100,
      offset: 100,
    })
  }, [])

  return (
    <div className='featured-listings'>
      <h1>Listings</h1>
    </div>
  )
}

export default FeaturedListings
