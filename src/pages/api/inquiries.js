import { submitInquiry, inquiryExists } from '@common/queries/inquiries'
import { response, parseCookie } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const cookie = parseCookie(req)
      const { access } = cookie
      const { id } = req.query
      const data = await inquiryExists(
        id,
        `${API_URL}/api/user/me/`,
        access,
        'check'
      )

      response(res, 200, true, '', data.inquiry_made)
    } catch (error) {
      response(res, 500, false, { message: 'Something went wrong.' })
    }
  }

  if (req.method === 'POST') {
    try {
      const cookie = parseCookie(req)
      const { access } = cookie
      const data = await submitInquiry(
        req.body,
        `${API_URL}/api/inquiries/create`,
        access
      )

      response(res, 200, true, 'Inquiry sent successfully', data)
    } catch (err) {
      response(res, 500, false, { message: 'Something went wrong.' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const cookie = parseCookie(req)
      const { inquiry } = req.query
      const { access } = cookie
      const data = await fetch(`${API_URL}/api/inquiries/${inquiry}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })

      if (data.status !== 204) {
        return data
      }

      response(res, 200, true, 'Inquiry deleted successfully', data)
    } catch (err) {
      response(res, 500, false, { message: 'Something went wrong.' })
    }
  }
}

export default inquiries
