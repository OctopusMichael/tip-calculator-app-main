import React, { useState, useEffect } from "react";

function Results({ newData }) {
  const [tipAmt, setTipAmt] = useState(0);
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const amount = () => {
      if (newData.bill !== 0 && newData.input !== 0 && newData.people !== 0) {
        return (newData.bill / newData.people) * newData.input;
      } else {
        return 0;
      }
    };
    setTipAmt(amount);

    const amountTotal = () => {
      if (newData.bill !== 0 && newData.input !== 0 && newData.people !== 0) {
        return (
          (newData.bill / newData.people) * newData.input +
          newData.bill / newData.people
        );
      } else {
        return 0;
      }
    };
    setTotal(amountTotal);
  }, [newData]);

  const handleReset = () =>{
    location.reload();
    
  }
  
  return (
    <section className="container section-container-second">
      <div className="row">
        <div className="col-6 ">
          <h5>Tip Amount</h5>
          <p>/ person </p>
        </div>
        <div className="col-6 ">
          <h1 className="text-end">${tipAmt.toFixed(2) }</h1>
        </div>
        <div className="col-6">
          <h5>Total</h5>
          <p>/ person </p>
        </div>
        <div className="col-6">
          <h1 className="text-end">${ total.toFixed(2) }</h1>
        </div>
        <div className="col-12">
          <button onClick={handleReset} className={total !== 0 ? "btn-reset active " : "btn-reset"}>
            {" "}
            Reset{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Results;

/* Tip Amount
  / person

  Total
  / person

  Reset */
