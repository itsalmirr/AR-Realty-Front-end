import axios from 'axios'

import { API_URL } from '@lib/constants'
import { response, parseCookie } from '@lib/helpers'

const updateuser = async (req, res) => {
  if (req.method === 'PUT') {
    // If there is no cookie, end the request
    if (!req.headers.cookie) {
      return res.end()
    }

    const cookie = parseCookie(req)
    if (!cookie.access && !cookie.refresh) {
      return res.end()
    }
    try {
      const { access } = cookie
      const { full_name, email, username } = req.body
      const config = {
        method: 'put',
        url: `${API_URL}/api/user/me/`,
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
        data: {
          full_name: full_name,
          email: email,
          username: username,
          // password: password,
        },
      }

      const { data } = await axios(config)

      // Return the user's data to the client if  the request was successful
      response(res, 200, true, data.message, data)
    } catch (err) {
      response(res, 401, false, err.response.data.message)
    }
  }
}

export default updateuser
