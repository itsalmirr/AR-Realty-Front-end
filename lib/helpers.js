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

export const setCookie = (res, access) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(access, '', {
      httpOnly: true,
      expires: new Date(0),
      path: '/api/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })
  )
}
