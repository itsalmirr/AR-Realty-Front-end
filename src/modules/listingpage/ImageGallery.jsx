import { Tab } from '@headlessui/react'

import ImageSwiper from '@hooks/ImageSwiper'

const ImageGallery = ({ listing }) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
        <ImageSwiper listing={listing} />
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ImageGallery
