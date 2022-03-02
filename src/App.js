import './App.css';
import { FETCH_LOANS_QUERY } from './api/Queries/fetchLoansQuery';
import { useQuery } from '@apollo/client';

import PageHeader from './components/PageHeader/PageHeader';
import LoanItem from './components/LoanItem/LoanItem'


const App = () => {
 
  const { data, error, loading } = useQuery(FETCH_LOANS_QUERY)

  return (
    <div className="App">
      <div className="pageTitle">
        <PageHeader 
          data-testid="header" 
          title="Transportation" 
          description="Loans for the transportation sector" />
      </div>
      <div className="resultsGroup">

        { loading && <p data-testid='loading' >Loading...</p> }

        { error && <div>We're having trouble fetching results...</div> }

        { data && data.lend.loans.values.map((loanItem) => {
          return <LoanItem 
            key={loanItem.id}
            name={loanItem.name} 
            image={loanItem.image.url}
            location={loanItem.geocode.country.name} 
            reason={loanItem.whySpecial} 
            loanAmount={loanItem.loanAmount} 
            loanFundraisingInfo={loanItem.loanFundraisingInfo} />
        })}
      </div>
    </div>
  );
}

export default App;
