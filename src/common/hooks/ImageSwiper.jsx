// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

const ImageSwiper = ({ listing }) => {
  const photos = [
    listing.photo_main,
    listing.photo_1,
    listing.photo_2,
    listing.photo_3,
    listing.photo_4,
    listing.photo_5,
  ]
  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='select-none w-full rounded-lg aspect-sq'>
      {photos.map(
        (photo, index) =>
          photo && (
            <SwiperSlide key={index}>
              <Image
                width={568}
                height={378.66}
                src={photo !== null && photo}
                alt=''
              />
            </SwiperSlide>
          )
      )}
    </Swiper>
  )
}

export default ImageSwiper
