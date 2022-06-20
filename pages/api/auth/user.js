import cookie from 'cookie'
import axios from 'axios'

import { API_URL, response } from '@lib/index'

const user = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      response(res, 401, false, 'Not logged in')
    } else {
      const cookies = cookie.parse(req.headers.cookie)
      if (!cookies.access) {
        return res.end()
      }
    }
    try {
      const cookies = cookie.parse(req.headers.cookie)
      if (cookies.access) {
        const currentUser = await axios.get(`${API_URL}/api/user/me/`, {
          headers: {
            Authorization: `Bearer ${cookies.access}`,
          },
        })
        response(res, 200, true, 'User logged in', currentUser.data)
      }
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default user
