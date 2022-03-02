import { gql } from "@apollo/client"
export const FETCH_LOANS_QUERY = gql `
query {
  lend{
    loans(limit: 30, offset: 0, filters: {sector: 3}){
      values {
        name
        id
        image {
          url(customSize: "s220")
        }
        geocode {
          country {
            name
          }
        }
        loanAmount
        loanFundraisingInfo{
          fundedAmount
          reservedAmount
          isExpiringSoon
        }
        
        status
        whySpecial
      }
    }
  }
}

`