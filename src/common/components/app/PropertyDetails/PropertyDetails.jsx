import {
  FaRegBuilding,
  FaCalendar,
  FaTemperatureHigh,
  FaSnowflake,
} from 'react-icons/fa'
import { MdGarage } from 'react-icons/md'
import { RiLandscapeFill } from 'react-icons/ri'

import { classNames } from '@lib/helpers'

const PropertyDetails = ({ listing }) => {
  const listingOverview = [
    {
      title: 'Property Type',
      value: `${listing.type_of_property} residence`,
      icon: FaRegBuilding,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-gray-50',
    },
    {
      title: 'Built in',
      value: `Built in ${listing.year_built}`,
      icon: FaCalendar,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      title: 'Heat',
      value: `${listing.heating}`,
      icon: FaTemperatureHigh,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
    },
    {
      title: 'Cooling',
      value: `${listing.cooling}`,
      icon: FaSnowflake,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    },
    {
      title: 'Land',
      value: `${listing.lot_size} Acres`,
      icon: RiLandscapeFill,
      iconForeground: 'text-green-700',
      iconBackground: 'bg-green-50',
    },
    {
      title: 'Garage / Parking',
      value: listing.garage,
      icon: MdGarage,
      iconForeground: 'text-blue-700',
      iconBackground: 'bg-blue-50',
    },
  ]
  return (
    <div className='rounded-lg mb-12 bg-gray-200 dark:bg-textColor-100 overflow-hidden shadow divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
      {listingOverview.map((item) => (
        <div
          key={item.title}
          className='relative bg-white dark:bg-background-darkLight group p-6'
        >
          <div className='flex items-center'>
            <span
              className={classNames(
                item.iconBackground,
                item.iconForeground,
                'rounded-lg inline-flex p-3'
              )}
            >
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </span>
            <span className='ml-4 text-gray-900 dark:text-textColor-100 font-bold'>
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertyDetails
