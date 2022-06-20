import axios from 'axios'

import { API_URL } from '@lib/index'
import { response, parseCookie } from '@lib/helpers'

const user = async (req, res) => {
  if (req.method === 'GET') {
    //  Making sure the user is logged in and has a valid token
    if (!req.headers.cookie) {
      response(res, 401, false, 'Not logged in')
    } else {
      const cookies = parseCookie(req)
      if (!cookies.access) {
        return res.end()
      }
    }

    try {
      const cookies = parseCookie(req)
      const currentUser = await axios.get(`${API_URL}/api/user/me/`, {
        headers: {
          Authorization: `Bearer ${cookies.access}`,
        },
      })

      currentUser.data
        ? response(res, 200, true, 'User found', currentUser.data)
        : response(res, 401, false, 'Not logged in')
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default user
