import axios from 'axios'
import { API_URL } from '@lib/index'
import { response, setCookies } from '@lib/helpers'

const login = async (req, res) => {
  if (req.method == 'POST') {
    const { email, password } = req.body

    try {
      const axiosResponse = await axios.post(`${API_URL}/api/token/`, {
        email,
        password,
      })
      //   Set the cookies
      if (axiosResponse.data) {
        setCookies(res, axiosResponse.data.access, axiosResponse.data.refresh)
      }

      const user = await axios.get(`${API_URL}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${axiosResponse.data.access}`,
        },
      })

      response(res, 200, true, 'Login Successful', user.data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default login
