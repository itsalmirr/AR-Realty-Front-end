import axios from 'axios'

import { response } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { first_name, last_name, company_name, email, phone, message } =
        req.body

      const { data } = await axios.post(
        `${API_URL}/api/contact/business-inquiries/`,
        {
          first_name,
          last_name,
          company_name,
          email,
          phone,
          message,
        }
      )

      response(res, 200, true, 'Inquiry sent successfully', data)
    } catch (err) {
      response(res, 500, false, err.message)
    }
  }
}

export default inquiries
