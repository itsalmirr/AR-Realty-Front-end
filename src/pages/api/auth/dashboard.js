import { API_URL } from '@lib/constants'
import { postRequest } from '@common/queries/auth'
import { response, parseCookie, tokenExpired, setCookies } from '@lib/helpers'

const dashboard = async (req, res) => {
  if (req.method == 'GET') {
    let cookie = parseCookie(req)
    let access
    const url = `${API_URL}/api/user/me/`
    if (tokenExpired(cookie.access)) {
      if (tokenExpired(cookie.refresh)) {
        setCookies(res, '', '')
        response(res, 401, false, 'Token expired')
      }
      const { access: refreshedAccess } = await postRequest(
        `${API_URL}/api/token/refresh/`,
        { refresh: cookie.refresh }
      )
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
      console.log(err, 'ERRR')
      response(res, 500, false, 'Server error')
    }
  }
}

export default dashboard
