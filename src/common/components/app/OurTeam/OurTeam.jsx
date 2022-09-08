const OurTeam = ({ realtors }) => {
  return (
    <div>
      <div className='bg-white'>
        <div className='mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-8 sm:space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                Our Realtors
              </h2>
              <p className='text-xl text-gray-500'>
                Our team of realtors are here to help you find your dream home.
              </p>
            </div>
            <ul className='mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3'>
              {realtors.map((realtor) => (
                <li key={realtor.full_name}>
                  <div className='space-y-4'>
                    <img
                      className='mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24'
                      src={realtor.photo}
                      alt=''
                    />
                    <div className='space-y-2'>
                      <div className='text-xs font-medium lg:text-sm'>
                        <h3>{realtor.full_name}</h3>
                        <p className='text-indigo-600'>Realtor</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
