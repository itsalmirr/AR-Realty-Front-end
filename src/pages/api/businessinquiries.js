import { submitInquiry } from '@common/queries/inquiries'
import { response } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const inquiries = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = await submitInquiry(
        req.body,
        `${API_URL}/api/contact/business-inquiries/`
      )
      response(res, 200, true, 'Inquiry sent successfully', data)
    } catch (err) {
      response(res, 500, false, err.message)
    }
  }
}

export default inquiries
