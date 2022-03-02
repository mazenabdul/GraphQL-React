import React, { useState, useEffect } from 'react'
import './LoanItem.css'
import LendComplete from '../LendComplete/LendComplete'
import { Card, ProgressBar, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { computeDonationIncrements } from '../../utilities/computeDonationIncrements'

const LoanItem = ({ name, image, location, reason, loanAmount, loanFundraisingInfo: { fundedAmount } }) => {
  
  const [dropdownItems, setDropdownItems] = useState([])
  const [lendAmount, setLendAmount] = useState(25)
  
  useEffect (() =>  setDropdownItems(computeDonationIncrements(25, loanAmount, fundedAmount)), [])

  return (
    <Card className="resultCard" data-testid="card">
            <div className="image"><img src={image} alt="personFace"></img></div>
              <div className="descriptionContainer">
              <div className="name">{name}</div>
              <div className="location">{location}</div>
              <div className="reason">{reason}</div>
            </div>
            <div className="progressContainer">
              <ProgressBar className='progress' label={true} now={fundedAmount} min={0} max={loanAmount} />
              <span className="progressLabel">${loanAmount - fundedAmount} to go!</span>
            </div>
            <div 
              className={parseFloat(fundedAmount) === parseFloat(loanAmount) ? 
              "completedMessage" : "bottomContainer"}
            >

          { parseFloat(fundedAmount) === parseFloat(loanAmount) ? <LendComplete /> :
            <>
              <div>
                <DropdownButton 
                  data-testid='dropdown' 
                  className="dropdown" 
                  id="amountDropdown" 
                  title={`$${lendAmount}`}>
                    {dropdownItems.map((item) => {
                      return <Dropdown.Item key={item} onClick={() => setLendAmount(item)}>${item}</Dropdown.Item>
                    })}
                </DropdownButton>
              </div>
              <div><Button className="cardBtn" variant='primary'>Lend</Button></div>
            </>
          }
            </div>
      </Card>
  )
}

export default LoanItem