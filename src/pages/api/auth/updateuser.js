import { API_URL } from '@lib/constants'
import { updateMe } from '@common/queries/auth'
import { response, parseCookie } from '@lib/helpers'

const updateuser = async (req, res) => {
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
      const data = await updateMe(req.body, `${API_URL}/api/user/me/`, access)
      response(res, 200, true, data.message, data)
    } catch (err) {
      response(res, 401, false, err.response.data.message)
    }
  }
}

export default updateuser
