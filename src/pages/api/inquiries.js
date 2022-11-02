import axios from 'axios'

import { response, parseCookie } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, listing, phone, message } = req.body
      const cookie = parseCookie(req)
      const { access } = cookie

      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`
      const { data } = await axios.post(`${API_URL}/api/inquiries/`, {
        name,
        email,
        message,
        listing,
        phone,
      })
      response(res, 200, true, 'Inquiry sent successfully', data)
    } catch (err) {
      response(res, 500, false, { message: 'Something went wrong.' })
    }
  }

  if (req.method === 'GET') {
    try {
      const cookie = parseCookie(req)
      const { access } = cookie
      const { id } = req.query
      const { data } = await axios.get(`${API_URL}/api/user/me/`, {
        headers: {
          Authorization: `Bearer ${access}`,
          CheckInquiry: 'check',
          ListingId: id,
        },
      })
      response(res, 200, true, '', data.inquiry_made)
    } catch (error) {
      response(res, 500, false, { message: 'Something went wrong.' })
    }
  }
}

export default inquiries
