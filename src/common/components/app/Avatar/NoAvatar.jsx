const NoAvatar = ({ letter, classNames, letterSize }) => {
  return (
    <div
      className={
        classNames
          ? classNames
          : 'inline-flex items-center justify-center h-24 w-24 rounded-md ring-1 ring-white sm:h-32 sm:w-32 bg-slate-500'
      }
    >
      <span
        className={`font-bold leading-none text-white ${
          letterSize ? letterSize : 'text-6xl'
        }`}
      >
        {letter}
      </span>
    </div>
  )
}

export default NoAvatar
