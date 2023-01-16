import { API_URL } from '@common/lib/constants'
import { response, setCookies } from '@lib/helpers'
import { postRequest, getRequest } from '@lib/requests'

const login = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body
      const loginRes = await postRequest(`${API_URL}/api/token/`, {
        username,
        password,
      })
      if (loginRes.status === 401) {
        res.end()
      }
      const { access, refresh } = loginRes
      setCookies(res, access, refresh)
      const userData = await getRequest(`${API_URL}/api/user/me`, access)
      response(res, 200, true, 'Login Successful', userData)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default login
