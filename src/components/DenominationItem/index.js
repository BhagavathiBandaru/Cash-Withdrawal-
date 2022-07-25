// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationData, balanceUpdating} = props
  const {value} = denominationData

  const onClickDecrementBalance = () => {
    balanceUpdating(value)
  }

  return (
    <li className="denomination-container">
      <button
        type="button"
        className="btn-styling"
        onClick={onClickDecrementBalance}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
