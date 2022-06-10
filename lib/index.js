export const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const NEXT_API = process.env.NEXT_PUBLIC_API_URL

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
