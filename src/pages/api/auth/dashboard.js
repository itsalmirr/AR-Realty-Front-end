import axios from 'axios'
import { API_URL } from '@lib/constants'
import { response, parseCookie, setCookies } from '@lib/helpers'

const dashboard = async (req, res) => {
  if (req.method == 'GET') {
    const cookie = parseCookie(req)
    const { access } = cookie

    try {
      const { data } = await axios.get(`${API_URL}/api/user/me/`, {
        headers: {
          Dashboard: 'true',
          Authorization: `Bearer ${access}`,
        },
      })

      response(res, 200, true, '', data)
    } catch (err) {
      setCookies(res, '', '')
      response(res, 500, false, 'Server error')
    }
  }
}

export default dashboard
