import cookie from 'cookie'

export const response = (res, code, status, message, userData) => {
  res.status(code).json({
    success: status,
    message: message,
    user: userData ? userData : null,
  })
  return res.end()
}

export const parseCookie = (req) => {
  return cookie.parse(req.headers.cookie)
}

export const removeCookies = (res, access, value) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(access, value ? value : '', {
      httpOnly: true,
      expires: new Date(0),
      path: '/api/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })
  )
}

export const setCookies = (res, access, value, refresh, refreshValue) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(access, value ? value : '', {
      httpOnly: true,
      maxAge: 120 * 60 * 1000, // 120 minutes
      path: '/api/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    }),
    cookie.serialize(refresh, refreshValue ? refreshValue : '', {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: '/api/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })
  )
}
