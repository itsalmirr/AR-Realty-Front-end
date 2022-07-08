import {
  FaRegBuilding,
  FaCalendar,
  FaTemperatureHigh,
  FaSnowflake,
} from 'react-icons/fa'
import { MdGarage } from 'react-icons/md'

import { RiLandscapeFill } from 'react-icons/ri'

const ListingOverview = ({ listing, classNames }) => {
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
    <div className='rounded-lg mb-12 bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
      {listingOverview.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === listingOverview.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === listingOverview.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}>
          <div className='flex items-center'>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}>
              <action.icon className='h-6 w-6' aria-hidden='true' />
            </span>
            <span className='ml-4 text-gray-900 font-bold'>{action.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListingOverview
