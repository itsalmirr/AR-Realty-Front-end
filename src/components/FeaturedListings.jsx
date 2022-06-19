import AOS from 'aos'
import { useEffect } from 'react'
import { ListingCard } from '@components/index'

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
    <div>
      <ListingCard />
    </div>
  )
}

export default FeaturedListings
