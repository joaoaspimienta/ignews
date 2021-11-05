import NextAuth from "next-auth"
import Providers from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})