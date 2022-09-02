import axios from 'axios'
import { API_URL } from '@lib/constants'
import { response, parseCookie } from '@lib/helpers'

const dashboard = async (req, res) => {
  if (req.method == 'GET') {
    const cookie = parseCookie(req)
    const { access } = cookie

    try {
      const { data } = await axios.get(`${API_URL}/api/user/dashboard/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })

      response(res, 200, true, 'Login Successful', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default dashboard
