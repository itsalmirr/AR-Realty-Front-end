import axios from 'axios'
import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

const settings = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider == 'github') {
        const { accessToken, idToken } = account
        try {
          const response = await axios.post(
            'http://127.0.0.1:8000/api/user/login/social/',
            {
              access_token: accessToken,
              id_token: idToken,
            }
          )
          const { access_token } = response.data
          user.accessToken = access_token

          return true
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return false
    },
  },
  async jwt(token, user, account, profile, isNewUser) {
    if (user) {
      const { accessToken } = user
      token.accessToken = accessToken
    }
    return token
  },
  async session(session, user) {
    session.accessToken = user.accessToken
    return session
  },
}

export default NextAuth(settings)
