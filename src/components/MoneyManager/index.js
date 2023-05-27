import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {addTransaction: [], balance: 0, income: 0, expenses: 0}

  onClickDisplayAmount = event => {
    event.preventDefault()
    this.setState(prevState => ({
      balance: prevState.balance + event.target.value,
    }))
  }

  render() {
    const {addTransaction, balance, income, expenses} = this.state

    return (
      <div className="app-money-manager">
        <div className="customer-container">
          <h1 className="main-heading">Hi, Richard</h1>
          <p className="top-sec-para">
            Welcome back to your
            <span className="span-text"> Money Manager</span>
          </p>
        </div>
        <div className="middle-section-container">
          <div className="balance-container" data-testid="balanceAmount">
            <img
              className="balance-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
            <div>
              <p className="card-heading">Your Balance</p>
              <p className="card-heading amount">Rs {balance}</p>
            </div>
          </div>
          <div className="income-container" data-testid="incomeAmount">
            <img
              className="income-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
            <div>
              <p className="card-heading">Your Income</p>
              <p className="card-heading amount">Rs {income}</p>
            </div>
          </div>
          <div className="expenses-container" data-testid="expensesAmount">
            <img
              className="expense-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
            <div>
              <p className="card-heading">Your Expenses</p>
              <p className="card-heading amount">Rs {expenses}</p>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <form className="form-container" onSubmit={this.onClickDisplayAmount}>
            <div>
              <h1 className="add-trans-heading">Add Transaction</h1>
            </div>
            <div className="input-container">
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <br />
              <input className="input" type="text" placeholder="TITLE" />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input className="input" type="text" placeholder="AMOUNT" />
            </div>
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <br />
            <select className="input-container input">
              <option>Income</option>
              <option>Expense</option>
            </select>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="list-container">
              <h1 className="history-sub-heading">Title</h1>
              <h1 className="history-sub-heading">Amount</h1>
              <h1 className="history-sub-heading">Type</h1>
              <ul>
                {/* {transactionTypeOptions.map(eachType => (
                  <TransactionItem transactionTypeOptions={eachType} />
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
