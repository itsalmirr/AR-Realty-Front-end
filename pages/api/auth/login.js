import axios from 'axios'
import cookie from 'cookie'
import { API_URL } from '@lib/index'

const login = async (req, res) => {
  if (req.method == 'POST') {
    const { email, password } = req.body

    try {
      const response = await axios.post(
        `${API_URL}/api/token/`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )

      //   Set the httpOnly cookie
      if (response.data) {
        res.setHeader(
          'Set-Cookie',
          //   serialize the cookie and set it to the httpOnly cookie
          cookie.serialize('access', response.data.access, {
            httpOnly: true,
            maxAge: 120 * 60 * 1000, // 120 minutes
            path: '/api/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
          }),

          cookie.serialize('refresh', response.data.refresh, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: '/api/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
          })
        )
        return res.status(200).json({
          success: true,
          message: 'Login Successful',
        })
      }
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

export default login
