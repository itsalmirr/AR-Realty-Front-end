import cookie from 'cookie'

import { response } from '@lib/index'

const logout = async (req, res) => {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie)
    if (!cookies.access) {
      response(res, 403, false, 'User not logged in')
    }

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('access', '', {
        httpOnly: true,
        maxAge: 0,
        path: '/api/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      }),
      cookie.serialize('refresh', '', {
        httpOnly: true,
        maxAge: 0,
        path: '/api/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      })
    )
    response(res, 200, true, 'Logout Successful')
  } else {
    res.setHeader('Allow', ['GET'])
    response(res, 405, false, `Method ${req.method} Not Allowed`)
  }
}

export default logout
