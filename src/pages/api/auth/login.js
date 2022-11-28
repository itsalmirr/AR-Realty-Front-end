import { API_URL } from '@lib/constants'
import { response, setCookies } from '@lib/helpers'

const login = async (req, res) => {
  if (req.method == 'POST') {
    const { username, password } = req.body

    try {
      const fetchRes = await fetch(`${API_URL}/api/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      const resData = await fetchRes.json()

      setCookies(res, resData.access, resData.refresh)
      const userData = await fetch(`${API_URL}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${resData.access}`,
        },

        method: 'GET',
        redirect: 'follow',
      })
      const data = await userData.json()
      response(res, 200, true, 'Login Successful', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default login
