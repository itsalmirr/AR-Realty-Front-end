import { API_URL } from '@lib/constants'
import { response, parseCookie } from '@lib/helpers'

const dashboard = async (req, res) => {
  if (req.method == 'GET') {
    const cookie = parseCookie(req)
    const { access } = cookie
    const url = `${API_URL}/api/user/me/`

    try {
      const fetchRes = await fetch(url, {
        headers: {
          Dashboard: req.headers.inquiries === 'true' ? 'true' : 'false',
          Authorization: `Bearer ${access}`,
        },
        method: 'GET',
        redirect: 'follow',
      })
      const data = await fetchRes.json()
      response(res, 200, true, '', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default dashboard
