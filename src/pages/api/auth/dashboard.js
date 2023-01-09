import { API_URL } from '@lib/constants'
import { postRequest, getRequest } from '@lib/requests'
import { response, parseCookie, tokenExpired, setCookies } from '@lib/helpers'

const dashboard = async (req, res) => {
  if (req.method == 'GET') {
    if (!req.headers.cookie) {
      return res.end()
    }

    let cookie = parseCookie(req)

    if (
      (!cookie.access && !cookie.refresh) ||
      (cookie.access === '' && cookie.refresh === '')
    ) {
      return res.end()
    }

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
      const data = await getRequest(
        url,
        access,
        `${req.headers.inquiries === 'true' ? 'true' : 'false'}`
      )
      response(res, 200, true, '', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default dashboard
