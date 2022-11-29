import { submitInquiry, inquiryExists } from '@common/queries/inquiries'
import { response, parseCookie } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const cookie = parseCookie(req)
      const { access } = cookie
      const data = await submitInquiry(
        req.body,
        `${API_URL}/api/inquiries/`,
        access
      )

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
}

export default inquiries
