const Divider = ({ text }) => {
  return (
    <div className='relative my-12'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-300' />
      </div>
      <div className='relative flex justify-center'>
        <span className='px-2 bg-white text-3xl text-gray-500 font-bold'>
          {text ? text : ''}
        </span>
      </div>
    </div>
  )
}

export default Divider
