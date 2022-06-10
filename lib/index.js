export const API_URL = process.env.NEXT_BACKEND_API_URL

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
