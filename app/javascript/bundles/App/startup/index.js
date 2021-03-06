import React from 'react'
import { ApolloProvider } from 'react-apollo'
import Router from '../router/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from './routes'

import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const csrfToken = document
  .querySelector('meta[name=csrf-token]')
  .getAttribute('content')
const client = new ApolloClient({
  link: createUploadLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken
    },
    uri: '/graphql'
  }),
  cache: new InMemoryCache()
})

const App = props => (
  <ApolloProvider client={client}>
    <Router>
      <MuiThemeProvider>{routes}</MuiThemeProvider>
    </Router>
  </ApolloProvider>
)

export default App
