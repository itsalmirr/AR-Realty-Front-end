import cookie from 'cookie'

import { response } from '@lib/index'

const user = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      response(res, 401, false, 'Not logged in')
      return res.end()
    } else {
      const cookies = cookie.parse(req.headers.cookie)
      if (!cookies.access) {
        return res.end()
      }
    }
    try {
      const cookies = cookie.parse(req.headers.cookie)
      if (cookies.access) {
        res.status(200).json({
          success: true,
          user: {
            id: cookies.access,
          },
          message: 'User logged in',
        })
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Server error',
      })
    }
  }
}

export default user
