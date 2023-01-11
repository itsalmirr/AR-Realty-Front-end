import { useState } from 'react'
import { useRouter } from 'next/router'
import { MdOutlineSearch } from 'react-icons/md'

const Search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.length > 0) {
      router.push(`/listings/searchpage?q=${search}`)
    }
  }

  return (
    <div className='relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0'>
      <div className='w-full sm:max-w-xs'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
            <MdOutlineSearch
              className='h-5 w-5 text-gray-800'
              aria-hidden='true'
            />
          </div>
          <input
            id='search'
            name='search'
            value={search}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(e)
              }
            }}
            required
            onChange={(e) => setSearch(e.target.value)}
            content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
            className='block w-full bg-gray-100 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-800 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm'
            placeholder='Enter an address, city, state, or ZIP code'
            type='search'
          />
        </div>
      </div>
    </div>
  )
}

export default Search
