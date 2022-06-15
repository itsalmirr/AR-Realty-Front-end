import cookie from 'cookie'

const user = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(401).json({ message: 'No cookie' })
    }
    try {
      const cookies = cookie.parse(req.headers.cookie)
      if (!cookies.access) {
        res.status(403).json({
          success: false,
          message: 'User not logged in',
        })
      } else {
        res.status(200).json({
          success: true,
          user: {
            id: cookies.access,
          },
          message: 'User logged in',
        })
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Server error',
      })
    }
  }
}

export default user
