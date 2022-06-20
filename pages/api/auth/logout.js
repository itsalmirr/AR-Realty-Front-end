import { setCookie, parseCookie, response } from '@lib/helpers'

const logout = async (req, res) => {
  if (req.method === 'GET') {
    const cookies = parseCookie(req)
    if (!cookies.access) {
      response(res, 403, false, 'User not logged in')
    }

    setCookie(res, 'access')
    response(res, 200, true, 'Logout Successful')
  } else {
    res.setHeader('Allow', ['GET'])
    response(res, 405, false, `Method ${req.method} Not Allowed`)
  }
}

export default logout
