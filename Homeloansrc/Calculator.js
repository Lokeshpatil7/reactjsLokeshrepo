import React, { useState } from "react";
export default function App() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [numMonths, setNumMonth] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid =
      +loanAmount >= 0 &&
      0 <= +interestRate &&
      +interestRate <= 100 &&
      +numMonths > 0;
    if (!formValid) {
      return;
    }
    setMonthlyPayment((+loanAmount * (1 + +interestRate / 100)) / +numMonths);
  };

  return (
    <>
      <div className="  align-content: center">
        <div className="App">
          <form onSubmit={calculate}>
            <table>
              <div>
                <td>
                  <tr>
                    {" "}
                    <label>loan amount</label>
                  </tr>
                  <tr>
                    <label>interest rate</label>
                  </tr>
                  <tr>
                    <label>number of months to pay off loan</label>
                  </tr>
                </td>
                <td>
                  <tr>
                    <input
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />
                  </tr>
                  <tr>
                    {" "}
                    <input
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                    />
                  </tr>
                  <tr>
                    {" "}
                    <input
                      value={numMonths}
                      onChange={(e) => setNumMonth(e.target.value)}
                    />
                  </tr>
                </td>{" "}
                <button type="submit">calculate monthly payment</button>
                <p>monthly payment: {monthlyPayment.toFixed(2)}</p>
              </div>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";

// const Calculator = () => {
//   const [state, setState] = useState();
//   const [error, setError] = useState("");

//   const calculateResults = ({ amount, interest, years }) => {
//     const userAmount = Number(amount);
//     const calculatedInterest = Number(interest) / 100 / 12;
//     const calculatedPayments = Number(years) * 12;
//     const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//     const monthly = (userAmount * x * calculatedInterest) / (x - 1);

//     if (isFinite(monthly)) {
//       const monthlyPaymentCalculated = monthly.toFixed(2);
//       const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
//       const totalInterestCalculated = (
//         monthly * calculatedPayments -
//         userAmount
//       ).toFixed(2);

//       // Set up results to the state to be displayed to the user
//       setResults({
//         monthlyPayment: monthlyPaymentCalculated,
//         totalPayment: totalPaymentCalculated,
//         totalInterest: totalInterestCalculated,
//         isResult: true,
//       });
//     }
//     return;
//   };

//   const [userValues, setUserValues] = useState({
//     amount: "",
//     interest: "",
//     years: "",
//   });

//   const handleInputChange = (event) =>
//     setUserValues({ ...userValues, [event.target.name]: event.target.value });

//   // const handleSubmitValues = (e) => {
//   //   e.preventDefault();
//   //   console.log(userValues);
//   // };

//   const [results, setResults] = useState({
//     monthlyPayment: "",
//     totalPayment: "",
//     totalInterest: "",
//     isResult: false,
//   });

//   const isValid = () => {
//     const { amount, interest, years } = userValues;
//     let actualError = "";
//     // Validate if there are values
//     if (!amount || !interest || !years) {
//       actualError = "All the values are required";
//     }
//     // Validade if the values are numbers
//     if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
//       actualError = "All the values must be a valid number";
//     }
//     // Validade if the values are positive numbers
//     if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
//       actualError = "All the values must be a positive number";
//     }
//     if (actualError) {
//       setError(actualError);
//       return false;
//     }
//     return true;
//   };

//   const handleSubmitValues = (e) => {
//     e.preventDefault();
//     if (isValid()) {
//       setError("");
//       calculateResults(userValues);
//     }
//   };
//   const clearFields = () => {
//     setUserValues({
//       amount: "",
//       interest: "",
//       years: "",
//     });

//     setResults({
//       monthlyPayment: "",
//       totalPayment: "",
//       totalInterest: "",
//       isResult: false,
//     });
//   };
//   return (
//     <>
//       <div>
//         <h1>Loan Calculator</h1>
//       </div>

//       <h1>Loan Calculator</h1>
//       <p>{error}</p>

//       <form onSubmit={handleSubmitValues}>
//       {!results.isResult ? (
//         <div>
//           <div>
//             <label>Amount:</label>
//             <input type="text" name="amount" placeholder="Loan amount" />
//           </div>
//           <div>
//             <label>Interest:</label>
//             <input
//               type="text"
//               name="amount"
//               placeholder="Loan amount"
//               value={userValues.amount}
//               onChange={handleInputChange}
//             />
//           </div>

//           <br />
//           <input type="submit" />
//           <div>
//           ) : (
//             <h4>
//               Loan amount: Rs={userValues.amount}/- <br />
//               Interest:{userValues.interest}% <br />
//               Years to repay: {userValues.years}
//             </h4>
//             <div>
//               <label>Monthly Payment:</label>
//               <input type="text" value={results.monthlyPayment} disabled />
//             </div>
//             <div>
//               <label>Total Payment: </label>
//               <input type="text" value={results.totalPayment} disabled />
//             </div>
//             <div>
//               <label>Total Interest:</label>
//               <input type="text" value={results.totalInterest} disabled />
//             </div>
//             <input
//               value="Calculate again"
//               type="button"
//               onClick={clearFields}
//             />

//           </div>
//         </div>

//       </form>
//     </>
//   );
// };

// export default Calculator;
