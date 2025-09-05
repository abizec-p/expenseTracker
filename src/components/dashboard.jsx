import transaction from "../data/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";
import Piechart from "./piecharts";
import BarGraph from "./piecharts";
import { PieChart,Pie, Tooltip,Cell} from "recharts";

 const pieData = [
  {value:"500",name:"rent"},
  {value:"100",name:"food"},
  {value:"200",name:"movie"},
 ]
 const COLORS = ["--var(red)","--var(blue)","green"];

export default function Dashboard() {
  const [date, setDate] = useState("");
  const [isExpenseOpen, setExpenseOpen] = useState(false);
  const [isIncomeOpen, setIncomeOpen] = useState(false);
  const [transaction, setTransaction] = useState([

    {date:"2025-02-24", category:"Rent",amount:"300",note:"Housing"},
    {date:"2025-02-24", category:"Salary",amount:"500",note:"Salary & Bonus" },
    {date:"2025-02-24", category:"fun",amount:"100",note:"Entertainment" },
    {date:"2025-02-24", category:"Movie",amount:"100",note:"ENtertainment" },
    {date:"2025-02-24", category:"Tsihrt",amount:"100",note:"Clothing" },
    {date:"2025-02-24", category:"Uber",amount:"100",note:"Transportation" },
    {date:"2025-02-24", category:"Bonus",amount:"100",note:"Salary & Bonus" },



  ])

  useEffect(() => {
    const now = new Date();
    setDate(
      now.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return (
    <section className="dashboard">
      <div className="left-part-dashboard">
      <div className="top-half">
        <div className="dash">
          <h1>Hi Mr.Pariyar</h1>
        </div>
        <div className="top-right">
          {" "}
          <p>{date}</p>
        </div>
      </div>
      <div className="middle">
        <div className="total-income">
          <strong>Total Income</strong>:
          <br />
          <h1>
            <span>$</span>1,200
          </h1>
        </div>
        <div className="total-expense">
          <strong>Total Expense</strong>
          <br />
          <h1>
            <span>$</span>600
          </h1>
        </div>
        <div className="remaining">
          <strong>Balance:</strong>
          <br />
          <h1>
            <span>$</span>600
          </h1>
        </div>
      </div>
      <div className="input-area">
        <div className="add-expense">
          <button
            className="add-expense-button"
            onClick={() => setExpenseOpen(true)}
          >
            - Add Expense
          </button>
          <AnimatePresence>
            {isExpenseOpen && (
              <motion.div
                className="modal-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpenseOpen(false)}
              >
                <motion.div
                  className="expense-modal"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div>
                    <div className="add-expense-heading close-button">
                    <h1>Add Expense</h1>
<button onClick={()=>setExpenseOpen(false)} className="close-button-icon"><IoClose />
</button>                    </div>
                    <div className="input-form-expense">
                      <div className="top-input-field">
                        <input
                          className="amount-field"
                          placeholder="Add amount"
                          type="number"
                        />
                       <input type="text" name="expense-name" placeholder="Spent on.." id="" />
                      </div>
                      <input type="date" name="" id="" />
                      <input
                        className="note"
                        placeholder="Add note"
                        type="text"
                      />

                      <button  className="modal-expense-button">
                        Add Expense
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="add-income">
          <button
            onClick={() => {
              setIncomeOpen(true);
            }}
            className="add-income-button"
          >
            + Add Income
          </button>
          <AnimatePresence>
            {isIncomeOpen && (
              <motion.div
                className="modal-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIncomeOpen(false)}
              >
                <motion.div
                  className="modal-income-form"
                  initial={{ scale: 0.8, opacity:0 }}
                  animate={{scale:1,opacity:1}}
                  exit={{scale:0.8,opacity:0}}
                  onClick={(e)=>e.stopPropagation()}
                >
                  <div className="income-form">
                    <div className="income-form-heading close-button">
                      <h1>Add income</h1>
                      <button onClick={()=>setIncomeOpen(false)} className="close-button-icon"><IoClose />
</button>
                    </div>
                    <div >
                    <input
                      className="income-amount"
                      type="number"
                      placeholder="Add Amount"
                      name="income-amount"
                    />
                    <input type="text" name="income-from" placeholder="Add Source" id="" />

                    </div>
                    <input
                      className="income-date"
                      type="date"
                      name="income-date"
                    />
                    <input
                      className="note"
                      type="text"
                      name="note"
                      placeholder="note"
                    />
                    <div>
                    <button className="modal-income-button">Add Income</button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="transaction-container">
        <div className="transaction-heading">
          <h1>Recent Transaction</h1>
          <p className="debit">Debit</p>
          <p className="credit">Credit</p>
        </div>
        <div className="main-transaction">
        {transaction.map((tx,index)=>(
          <div key={index} className="transaction-row">
            <div className="transaction-left">
            <h1>{tx.category}</h1>
             <p>{tx.date}</p>

            </div>
            
            {(tx.category === "Salary" || tx.category === "Bonus") ? ( 
                <div className="transaction-debit">
              <h3>+${tx.amount}</h3>
              </div>
            ) : (
            
            <div className="transaction-credit">
              <h3>-${tx.amount}</h3>
              </div>

            )}
              

          </div>






        ))}
        </div>

      </div>
      </div>
      <div className="right-part-dashboard">
        <div>
        <BarGraph/>
        </div>
         <div className="most-spent">

        <h3>Most spent on</h3>
        <div className="most-spent-part">
          <div className="most-spent-row">
            {transaction
            .filter(tx=> tx.category.toLowerCase() !== "salary")
            .slice()
            .sort((a,b)=>b.amount - a.amount)
            .slice(0,3)
            .map((tx,index)=>(
              <div className="row-most-spent" key={index}>
               <h3>#{index+1}. {tx.category}   </h3>           
               <h3>$ {tx.amount}   </h3>           
              </div>



            )

            )}
          </div>
          <div className="most-spent-pie">
          
          </div>
        </div>
      </div>

      </div>
     
    </section>
  );
}
