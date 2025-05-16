import { useState } from 'react';
import '/index.css'
function Budjet() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
//   const[salary,setSalary]=useState('')

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };
  const [TotalSalary] = useState(60000);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalSpent = TotalSalary - totalExpenses;

  return (
    <>
    <div className='bmain'>
      <div className='bhead'><h2>Expense Tracker</h2></div>
      <div className='container'>
      <form className="form" onSubmit={addExpense}>
        
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          /><br/><br/>
        
        
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          /><br/><br/>
        
        <button type="submit">Add Expense</button><br/><br/>
      </form>
      <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <p>{expense.description}</p>
          <p>{expense.amount}</p>
        </div>
      ))}
        </div>
      <h3>Total Expenses: {totalExpenses}</h3>
      <h3>My salary: {TotalSalary}</h3>
      <h2>Remaining amount:{totalSpent}</h2>
      </div>
      </div>
     
       </>
    
  );
 
}

export default Budjet;