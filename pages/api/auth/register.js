import { API_URL } from '@lib/index'
import axios from 'axios'

const register = async (req, res) => {
  if (req.method == 'POST') {
    const { email, user_name, full_name, password } = req.body

    try {
      const response = await axios.post(
        `http://localhost:8000/api/user/register/`,
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

      res.status(200).json(response.data)
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err,
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json(`Method ${req.method} Not Allowed`)
  }
}

export default register
