import axios from 'axios'
import { API_URL } from '@lib/constants'
import { response, setCookies } from '@lib/helpers'

const login = async (req, res) => {
  if (req.method == 'POST') {
    const { user_name, password } = req.body

    try {
      const axiosResponse = await axios.post(`${API_URL}/api/token/`, {
        user_name,
        password,
      })

      setCookies(res, axiosResponse.data.access, axiosResponse.data.refresh)
      const { data } = await axios.get(`${API_URL}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${axiosResponse.data.access}`,
        },
      })

      response(res, 200, true, 'Login Successful', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default login
