import Link from 'next/link';
import Image from 'next/image';
import { IoMdPricetag } from 'react-icons/io';
import { FaBed, FaBath } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsHouseDoorFill } from 'react-icons/bs';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { MvpStar, Verified } from '@common/components/app/Marks';

import { formatPrice } from '@lib/helpers';

const ListingCard = ({ listing }) => {
  const { realtor } = listing;

  return (
    <div
      key={listing.id}
      data-aos='fade-up'
      className='col-span-1 flex my-6 lg:my-2 flex-col text-center bg-white dark:bg-background-dark rounded-lg shadow-lg dark:shadow-black divide-y divide-gray-200'
    >
      <div className='flex-1 flex flex-col'>
        <Link href={`/listings/${listing.slug}`}>
          <Image
            className='flex-shrink-0 cursor-pointer mx-auto rounded-t-lg'
            width={1200}
            height={300}
            src={listing.photo_main}
            alt={`${listing.title} photo`}
          />
        </Link>
        <Link
          href={`/listings/${listing.slug}`}
          className='mt-2 mb-2 text-gray-900 dark:text-textColor-100 text-lg cursor-pointer font-bold hover:underline hover:text-accent-light'
        >
          {listing.title}
        </Link>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center' aria-hidden='true'>
            <div className='w-full border-t border-gray-300' />
          </div>
        </div>
        <div className='flex justify-between'>
          <h3 className='flex justify-start items-center mx-2 mt-3'>
            <IoMdPricetag className='w-4 h-4 mr-2 dark:text-textColor-icons text-gray-300' />
            <span className='text-gray-900 dark:text-textColor-100 font-bold'>{formatPrice(listing.price)}</span>
          </h3>
        </div>
        <div className='border-b mt-2'>
          {/* <ListingFeatures listing={listing} /> */}
          <ul className='flex items-center justify-between'>
            <li>
              <p className='flex text-gray-900 dark:text-textColor-100 font-light text-sm items-center p-2'>
                <BsHouseDoorFill className='w-4 h-4 text-gray-300 dark:text-textColor-icons' />
                <span className='ml-2 mr-1 whitespace-nowrap'>
                  {listing.sqft}
                  ft
                  <sup>2</sup>
                </span>
              </p>
            </li>
            <li>
              <p className='flex text-gray-900 dark:text-textColor-100 font-light text-sm items-center p-2'>
                <FaBed className='w-4 h-4 text-gray-300 dark:text-textColor-icons ' />
                <span className='ml-2 mr-1 whitespace-nowrap'>{listing.bedrooms}</span>
                Bed
              </p>
            </li>
            <li>
              <p className='flex text-gray-900 dark:text-textColor-100 font-light text-sm items-center p-2'>
                <FaBath className='w-4 h-4 text-gray-300 dark:text-textColor-icons ' />
                <span className='ml-2 mr-1 whitespace-nowrap'>{listing.bathrooms}</span>
                Bath
              </p>
            </li>
          </ul>
        </div>

        <p className='text-gray-500 dark:text-textColor-100 text-sm p-2 break-normal justify text-justify'>
          {`${listing.description.slice(0, 100)}...`}
        </p>
      </div>
      <div className='rounded-lg p-2 flex flex-col justify-between'>
        <div className='ml-2 flex items-center justify-between'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href={`/realtors/${realtor.slug}`} title='Realtor' className='hover:underline'>
              <div>
                <span className='sr-only'>{realtor.full_name}</span>
                <Image
                  width={40}
                  height={40}
                  className='h-10 w-10 rounded-md'
                  src={realtor.photo}
                  quality={100}
                  alt={`${realtor.full_name} photo`}
                />
              </div>
            </Link>
            <div className='ml-3'>
              <p className='flex space-x-1 text-sm items-center font-extrabold text-primary-light dark:text-textColor-100'>
                <Link href={`/realtors/${realtor.slug}`} title='Realtor' className='hover:underline'>
                  {realtor.full_name}
                </Link>
                <Verified />
                {realtor.is_mvp && <MvpStar />}
              </p>
              <div className='flex space-x-1 items-center text-xs text-gray-400'>
                <AiTwotoneCalendar className='w-4 h-4 text-gray-300 dark:text-textColor-icons' />
                <time title='Published date' dateTime={listing.pub_date}>
                  {listing.publishedAt}
                </time>
                <span aria-hidden='true'>&middot;</span>
              </div>
            </div>
          </div>
          <div title='Location' className='flex items-center'>
            <MdLocationOn className='w-4 h-4 text-gray-300 dark:text-textColor-icons' />
            <span className='text-gray-400 text-xs font-light'>
              {listing.city},{listing.state}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
