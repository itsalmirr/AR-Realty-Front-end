import axios from 'axios'

import { API_URL, response } from '@lib/index'

const register = async (req, res) => {
  if (req.method == 'POST') {
    const { email, user_name, full_name, password } = req.body

    try {
      const axiosResponse = await axios.post(
        `${API_URL}/api/user/register/`,
        {
          email,
          user_name,
          full_name,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      res.status(200).json(axiosResponse.data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default register
