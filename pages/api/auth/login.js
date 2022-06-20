import axios from 'axios'
import cookie from 'cookie'

import { API_URL } from '@lib/index'
import { response } from '@lib/helpers'

const login = async (req, res) => {
  if (req.method == 'POST') {
    const { email, password } = req.body

    try {
      const axiosResponse = await axios.post(
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
      if (axiosResponse.data) {
        res.setHeader(
          'Set-Cookie',
          //   serialize the cookie and set it to the httpOnly cookie
          cookie.serialize('access', axiosResponse.data.access, {
            httpOnly: true,
            maxAge: 120 * 60 * 1000, // 120 minutes
            path: '/api/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
          }),

          cookie.serialize('refresh', axiosResponse.data.refresh, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: '/api/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
          })
        )
        response(res, 200, true, 'Login Successful')
      }
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default login
