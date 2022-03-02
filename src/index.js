import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {ApolloProvider, ApolloClient, InMemoryCache}  from '@apollo/client';


export const client = new ApolloClient({  
  uri: 'https://marketplace-api.k1.kiva.org/graphql',
  cache: new InMemoryCache()
})
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
