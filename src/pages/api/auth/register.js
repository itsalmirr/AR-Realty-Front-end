import axios from 'axios'

import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'

const register = async (req, res) => {
  if (req.method == 'POST') {
    const { email, user_name, full_name, password } = req.body

    try {
      const axiosResponse = await axios.post(`${API_URL}/api/user/register/`, {
        email,
        user_name,
        full_name,
        password,
      })
      response(res, 200, true, axiosResponse.data.message, axiosResponse.data)
    } catch (err) {
      response(res, 500, false, err.response.data.message)
    }
  }
}

export default register
