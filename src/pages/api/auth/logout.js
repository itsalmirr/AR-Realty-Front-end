import { removeCookies, parseCookie, response, setCookies } from '@lib/helpers'

const logout = async (req, res) => {
  if (req.method === 'GET') {
    const cookies = parseCookie(req)
    if (!cookies.access || !cookies.refresh) {
      response(res, 403, false, 'User not logged in')
    }

    setCookies(res, '', '')
    response(res, 200, true, 'Logout Successful')
  } else {
    res.setHeader('Allow', ['GET'])
    response(res, 405, false, `Method ${req.method} Not Allowed`)
  }
}

export default logout
