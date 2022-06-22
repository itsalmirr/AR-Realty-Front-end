import cookie from 'cookie'

export const response = (res, code, status, message, userData) => {
  return res.status(code).json({
    success: status,
    message: message,
    user: userData ? userData : null,
  })
}

export const parseCookie = (req) => {
  return cookie.parse(req.headers.cookie)
}

export const setCookies = (res, access, refresh) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('access', access ? access : '', {
      httpOnly: true,
      maxAge: 120 * 60 * 1000, // 120 minutes
      path: '/api/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    }),
    cookie.serialize('refresh', refresh ? refresh : '', {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: '/api/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })
  )
}
