export const Divider = ({ text }) => (
  <div className='relative my-12'>
    <div className='absolute inset-0 flex items-center' aria-hidden='true'>
      <div className='w-full border-t border-gray-300' />
    </div>
    <div className='relative flex justify-center'>
      <span className='px-2 bg-background-light dark:bg-background-dark text-3xl lg:text-4xl text-gray-500 dark:text-textColor-100 font-serif font-bold'>
        {text || ''}
      </span>
    </div>
  </div>
)
