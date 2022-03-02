import { FETCH_LOANS_QUERY } from "./fetchLoansQuery";

export const mock = {
  request: {
    query: FETCH_LOANS_QUERY,
    variables: {},
  },
  result: {
    data:{
      lend:{
        loans:{
          values:[{
              name:"Alefa",
              id:2331461,
              image:{
                url:"https://www-kiva-org-0.freetls.fastly.net/img/s220/2f5e5397d3e2f10b5b53c0714d8bd844.jpg",
                __typename:"Image"
              },
              geocode:{
                country:{
                  name:"Samoa",
                  __typename:"Country"
                },
                  __typename:"Geocode"
                },
                loanAmount:"2500.00",
                loanFundraisingInfo:{
                  fundedAmount:"225.00",
                  reservedAmount:"0.00",
                  isExpiringSoon:false,
                  __typename:"LoanFundraisingInfo"
                },
                  status:"fundraising",
                  whySpecial:"It helps proven female entrepreneurs grow their businesses and create jobs.",
                  __typename:"LoanPartner"
            }]
        }
      }
    }
  }
}