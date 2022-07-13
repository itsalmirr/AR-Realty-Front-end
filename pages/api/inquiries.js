import axios from 'axios'

import { response, parseCookie } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { listing_id, name, email, listing, phone, message } = req.body
<<<<<<< HEAD
      const { data } = await axios.post(`${API_URL}/api/inquiries/`, {
        listing,
        listing_id,
        name,
        email,
        phone,
        message,
      })

      response(res, 200, true, 'Inquiry sent successfully', data)
    } catch (err) {
      return response(res, 500, false, 'Error sending inquiry')
=======
      const cookie = parseCookie(req)
      const { access } = cookie
      console.log(access)
      const { data } = await axios.post(`${API_URL}/api/inquiries/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
        data: {
          listing_id,
          name,
          email,
          listing,
          phone,
          message,
        },
      })
      response(res, 200, true, 'Inquiry sent successfully', data)
    } catch (err) {
      response(res, 500, false, err.message)
>>>>>>> 108e324d1e4dcad3d8d2b3201e831f85427ecd02
    }
  }
}

export default inquiries
