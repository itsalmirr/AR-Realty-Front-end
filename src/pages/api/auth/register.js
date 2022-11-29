import { API_URL } from '@lib/constants'
import { registerMe } from '@common/queries/auth'
import { response } from '@lib/helpers'

const register = async (req, res) => {
  if (req.method == 'POST') {
    try {
      const data = await registerMe(req.body, `${API_URL}/api/user/register/`)
      response(res, 200, true, data.message, data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default register
