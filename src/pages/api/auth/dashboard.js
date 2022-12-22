import { API_URL } from '@lib/constants'
import { postRequest } from '@lib/requests'
import { response, parseCookie, tokenExpired, setCookies } from '@lib/helpers'

const dashboard = async (req, res) => {
  if (req.method == 'GET') {
    let cookie = parseCookie(req)
    let access
    const url = `${API_URL}/api/user/me/`
    const urlRefresh = `${API_URL}/api/token/refresh/`

    if (tokenExpired(cookie.access)) {
      if (tokenExpired(cookie.refresh)) {
        setCookies(res, '', '')
      }
      const { access: refreshedAccess } = await postRequest(urlRefresh, {
        refresh: cookie.refresh,
      })
      setCookies(res, refreshedAccess, cookie.refresh)
      access = refreshedAccess
    }

    try {
      if (!access) {
        access = cookie.access
      }
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
