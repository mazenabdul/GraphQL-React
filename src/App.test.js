import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/react-testing';
import { render, screen } from '@testing-library/react';
import { mock } from './api/Queries/mockTestingQuery';
import App from './App';
import PageHeader from './components/PageHeader/PageHeader';

const client = new ApolloClient({  
  uri: 'https://marketplace-api.k1.kiva.org/graphql',
  cache: new InMemoryCache()
})

//Some initial tests with the actual API service
test('Loads the main app', () => {
 render(
   <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
 )
 const title = screen.getByText("Transportation")
 expect(title).toBeInTheDocument()
});

test('Loads the page description', () => {
  render(
    <ApolloProvider client={client}>
      <PageHeader title="Test" description="Test Description" />
    </ApolloProvider>
  )

  const description = screen.getByText("Test Description")
  expect(description).toBeInTheDocument()
})


//Mock API Response Testing
test('Displays loading state while data is being fetched', async () => {
  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <App />
    </MockedProvider>
  )  
  expect(screen.getByText("Loading...")).toBeInTheDocument()
})

test('Renders out a loan card UI element', async () => {
  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <App />
    </MockedProvider>
  )
  const result = await screen.findByText('Alefa')
  expect(result).toBeInTheDocument()
})

test('The rendered result card contains an image of the person', async () => {
  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <App />
    </MockedProvider>
  )
  const image = await screen.findByAltText("personFace")
  expect(image).toBeInTheDocument()
})

test('The rendered result card contains the name, location and reason for loan', async() => {
  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <App />
    </MockedProvider>
  )
  const name = await screen.findByText('Alefa')
  const location = await screen.findByText('Samoa')
  const reason = await screen.findByText('It helps proven female entrepreneurs grow their businesses and create jobs.')
  expect(name).toBeInTheDocument() 
  expect(location).toBeInTheDocument() 
  expect(reason).toBeInTheDocument() 
})

test('The result card should have a lend button, along with a amount dropdown', async () => {
  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <App />
    </MockedProvider>
  )
  const lendButton = await screen.findByText("Lend")
  const dropdown = await screen.findByTestId("dropdown")
  expect(lendButton).toBeInTheDocument()
  expect(dropdown).toBeInTheDocument()
})

