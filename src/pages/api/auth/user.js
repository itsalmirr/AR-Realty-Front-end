import axios from 'axios'

import { API_URL } from '@lib/constants'
import { response, parseCookie, setCookies } from '@lib/helpers'

const user = async (req, res) => {
  if (req.method === 'GET') {
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
      // Get the user's data from the API with the access token
      const { data } = await axios.get(`${API_URL}/api/user/me/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })

      // Return the user's data to the client if  the request was successful
      response(res, 200, true, 'User is logged in', data)
    } catch (err) {
      // If the request failed, try to refresh the access token
      const { refresh } = cookie
      const { data } = await axios.post(`${API_URL}/api/token/refresh/`, {
        refresh: refresh,
      })

      const { data: userData } = await axios.get(`${API_URL}/api/user/me/`, {
        headers: {
          Authorization: `Bearer ${data.access}`,
        },
      })
      if (userData) {
        setCookies(res, data.access, refresh)
        response(res, 200, true, 'User is logged in', userData)
      } else {
        setCookies(res, '', '')
        response(res, 401, false, 'User is not logged in')
      }
    }
  }

  if (req.method === 'PUT') {
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
      let config = {
        method: 'put',
        url: 'http://localhost:8000/api/user/me/',
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
        data: {
          full_name: full_name,
          email: email,
        },
      }

      const { data } = await axios(config)

      response(
        res,
        200,
        true,
        'Account information successfully changed.',
        data
      )
    } catch (err) {
      // If the request failed, try to refresh the access token
      console.error(err)
    }
  }
}

export default user
