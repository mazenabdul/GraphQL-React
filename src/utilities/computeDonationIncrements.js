export const computeDonationIncrements = (startingValue, loanAmount, fundedAmount) => {
    let maximumDonation = 0
    let donationIncrements = []

    if(loanAmount - fundedAmount >= 500){
      maximumDonation = 500
    } else if (loanAmount-fundedAmount< 500){
      maximumDonation = parseFloat(loanAmount)-fundedAmount
    }
      
    for(let i=startingValue; i<=maximumDonation; i+=25){
      donationIncrements.push(i)
    }
     return donationIncrements
}