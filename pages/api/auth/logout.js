import cookie from 'cookie'

const logout = async (req, res) => {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie)
    if (!cookies.access) {
      res.status(403).json({
        success: false,
        message: 'User not logged in',
      })
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
    res.status(200).json({
      success: true,
      message: 'Logout Successful',
    })
  }

  res.setHeader('Allow', ['GET'])
  return res.status(405).json(`Method ${req.method} Not Allowed`)
}

export default logout
