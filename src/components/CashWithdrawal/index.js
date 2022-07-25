import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  balanceUpdating = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    const name = 'Bhagavathi Bandaru'
    const initialLetter = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cashWithdraw-container">
          <div className="user-profile">
            <div className="name-letter-display-container">
              <p className="letter-styling">{initialLetter}</p>
            </div>
            <p className="name-styling">{name}</p>
          </div>

          <div className="balance-container">
            <p className="balance-name-styling">Your Balance</p>
            <p className="balance">
              {amount}
              <br />
              <span className="amount-details">In Rupees</span>
            </p>
          </div>
          <div className="container">
            <p className="withdraw-styling">Withdraw</p>
            <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationData={eachDenomination}
                  balanceUpdating={this.balanceUpdating}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
