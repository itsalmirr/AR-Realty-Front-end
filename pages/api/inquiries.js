import axios from 'axios'

import { response, parseCookie } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { listing_id, name, email, listing, phone, message } = req.body
      const cookie = parseCookie(req)
      const { access } = cookie

      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`
      const { data } = await axios.post(`${API_URL}/api/inquiries/`, {
        listing_id,
        name,
        email,
        listing,
        phone,
        message,
      })

      response(res, 200, true, 'Inquiry sent successfully', data)
    } catch (err) {
      response(res, 500, false, err.message)
    }
  }
}

export default inquiries
