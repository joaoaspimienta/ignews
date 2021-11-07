import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { fauna } from "../../../services/fauna;"

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user'
        }),
    ],
    callbacks: {
      async signIn(user, account, profile) {
        return true
      },
    }
})