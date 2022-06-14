import cookie from 'cookie'

const user = async (req, res) => {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie)
    if (!cookies.access) {
      res.status(403).json({
        success: false,
        message: 'User not logged in',
      })
    }

    res.status(200).json({
      success: true,
    })
  }
}

export default user
