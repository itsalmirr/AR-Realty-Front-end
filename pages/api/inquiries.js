import axios from 'axios'

import { response } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'POST') {
    const { listing_id, name, email, listing, phone, message } = req.body

    const { data } = await axios.post(`${API_URL}/api/inquiries/`, {
      listing,
      listing_id,
      name,
      email,
      phone,
      message,
    })
    response(res, 200, true, 'Inquiry sent successfully', data)
  }
}

export default inquiries
