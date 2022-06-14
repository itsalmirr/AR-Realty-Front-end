import cookie from 'cookie'

const user = async (req, res) => {
  if (req.method === 'GET') {
    console.log("here")
    const cookies = cookie.parse(req.headers.cookie)
    if (!cookies.access) {
      res.status(403).json({
        success: false,
        message: 'User not logged in',
      })
    }

    res.status(200).json({
      success: true,
      user: {
        id: cookies.access,
      },
      message: 'User logged in',
    })
  }
}

export default user
