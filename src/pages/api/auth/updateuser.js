import axios from 'axios'

import { API_URL } from '@lib/constants'
import { response, parseCookie, setCookies } from '@lib/helpers'

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
      const { full_name, email } = req.body
      // Get the user's data from the API with the access token
      //   const { data } = await axios.put(`${API_URL}/api/user/me/`, {
      //     headers: {
      //       Authorization: `Bearer ${access}`,
      //     },
      //     data: body,
      //   })
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
        },
      }

      await axios(config)

      // Return the user's data to the client if  the request was successful
      response(res, 200, true, 'User is logged in')
    } catch (err) {
      console.log(err.message)
      // If the request failed, try to refresh the access token
      response(res, 401, false, 'User is not logged in')
    }
  }
}

export default updateuser
