import cookie from 'cookie'
import axios from 'axios'

export const fetcher = async (url) => axios.get(url).then((res) => res.data)
export const PER_PAGE = 6

export const response = (res, code, status, message, resData) => {
  return res.status(code).json({
    success: status,
    message: message,
    resData: resData,
  })
}

export const parseCookie = (req) => {
  return cookie.parse(req.headers.cookie)
}

export const setCookies = (res, access, refresh) => {
  // Set cookies access expiry tg 1 day and refresh expiry to 7 days
  const accessExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24)
  const refreshExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)

  res.setHeader('Set-Cookie', [
    cookie.serialize('access', access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: accessExpiry,
      path: '/',
    }),
    cookie.serialize('refresh', refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: refreshExpiry,
      path: '/',
    }),
  ])
}

export const removeCookies = (res) => {
  // Remove cookies
  res.setHeader('Set-Cookie', [
    cookie.serialize('access', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
      path: '/',
    }),
    cookie.serialize('refresh', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
      path: '/',
    }),
  ])
}

const formatter = new Intl.NumberFormat('en-EN', {
  maximumSignificantDigits: 3,
  style: 'currency',
  currency: 'USD',
})

const numFormater = new Intl.NumberFormat('en-EN', {
  maximumSignificantDigits: 3,
  style: 'decimal',
})

export const numberFormater = (num) => {
  return numFormater.format(num)
}

export const formatPrice = (price) => {
  return formatter.format(price)
}
