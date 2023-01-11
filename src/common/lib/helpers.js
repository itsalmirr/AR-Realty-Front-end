import cookie from 'cookie'
import { NODE_ENV } from './constants'

export const fetcher = (url) => fetch(url).then((r) => r.json())

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const response = (res, code, status, message, resData) => {
  return res.status(code).json({
    success: status,
    message: message,
    resData: resData,
  })
}

export const parseCookie = (req) => {
  if (!req.headers.cookie) {
    return cookie.parse(req.cookies)
  }

  return cookie.parse(req.headers.cookie)
}

export const setCookies = (res, access, refresh) => {
  res.setHeader('Set-Cookie', [
    cookie.serialize('access', access, {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 120 * 60 * 1000,
      path: '/',
    }),
    cookie.serialize('refresh', refresh, {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
    }),
  ])
}

export const removeCookies = (res) => {
  res.setHeader('Set-Cookie', [
    cookie.serialize('access', '', {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      expires: new Date(0),
      path: '/',
    }),
    cookie.serialize('refresh', '', {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      expires: new Date(0),
      path: '/',
    }),
  ])
}

export const tokenExpired = (token) => {
  const expiry = JSON.parse(atob(token.split('.')[1])).exp
  return Math.floor(new Date().getTime() / 1000) >= expiry
}

export const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

export const numberFormater = (num) => {
  const numFormater = new Intl.NumberFormat('en-EN', {
    maximumSignificantDigits: 3,
    style: 'decimal',
  })

  return numFormater.format(num)
}

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat('en-EN', {
    maximumSignificantDigits: 3,
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}

// Convert date into a local date string
export const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formatter.format(date)
}

export const quickSearch = async (q) => {
  const url = `/api/qucksearch?q=${q}`
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  })
  const data = await res.json()
  return data.resData
}
