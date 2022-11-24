import './index.css';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client';

import App from './App';
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { onError } from "@apollo/client/link/error";
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/graphql" })])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
