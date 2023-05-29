// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction} = props
  const {id, title, amount, type} = transaction
  const ondelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="history-item">
      <p className="history-title">{title}</p>
      <p className="history-amount">{amount}</p>
      <p className="history-type">{type}</p>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={ondelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
