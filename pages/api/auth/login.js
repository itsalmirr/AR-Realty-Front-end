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
        setCookies(
          res,
          'access',
          axiosResponse.data.access,
          'refresh',
          axiosResponse.data.refresh
        )
      }
      response(res, 200, true, 'Login Successful', axiosResponse.data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default login
