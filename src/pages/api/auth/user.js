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
      const fetchRes = await fetch(`${API_URL}/api/user/me/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
        method: 'GET',
        redirect: 'follow',
      })
      const data = await fetchRes.json()

      // Return the user's data to the client if  the request was successful
      response(res, 200, true, 'User is logged in', data)
    } catch (err) {
      // If the request failed, try to refresh the access token
      const { refresh } = cookie
      const fetchRes = await fetch(`${API_URL}/api/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh,
        }),
      })
      const data = await fetchRes.json()
      const userData = await fetch(`${API_URL}/api/user/me/`, {
        headers: {
          Authorization: `Bearer ${data.access}`,
        },
      })
      const user = await userData.json()
      if (user) {
        setCookies(res, data.access, refresh)
        response(res, 200, true, 'User is logged in', user)
      } else {
        setCookies(res, '', '')
        response(res, 401, false, 'User is not logged in')
      }
    }
  }
}

export default user
