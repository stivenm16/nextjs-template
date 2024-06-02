import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password', placeholder: '*****' },
      },
      async authorize(credentials, req): Promise<any> {
        const userFound = {
          userName: 'test',
          email: '',
        }
        if (!userFound) throw new Error('No user found')

        return {
          email: credentials?.email,
          password: credentials?.password,
        }
      },
    }),
  ],

  pages: {
    signIn: '/',
  },
}
