import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";

function Calculator({ newData, setNewData }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [error, setError] = useState(false);


  const handleClick = (e) => {
    let val = e.target.value * 1;

    setNewData((prevData) => ({
      ...prevData,
      input: val,
    }));
  };

  const handleChangeCustom = (e) => {
    setTimeout(() => {
      let val = e.target.value / 100;

      setNewData((prevData) => ({
        ...prevData,
        input: val,
      }));
    }, 500);
  };
  const handleChangePeople = (e) => {
    setTimeout(() => {
      let val = e.target.value ;

      setNewData((prevData) => ({
        ...prevData,
        people: val,
      }));
    }, 500);
  };
  const handleChangeBill = (e) => {
    setTimeout(() => {
      let val = e.target.value   ;

      setNewData((prevData) => ({
        ...prevData,
        bill: val,
      }));
    }, 500);
  };



  return (
    <>
      {/* onSubmit={handleSubmit(onSubmit)} */}

      <form>
        <div className="row">
          <div className= "col-12 section-bill"  >
            <label>Bill</label>
            <input
              onChange={handleChangeBill}
              id="inputBill" /// "inputBill"  //
              className="form-control  mt-2" 
              type="number"

            />
          </div>

          <div className="section-tip mt-4">
            <label>Section Tip%</label>
            <div className="row">
              <div className="col-6 col-lg-4">
                <div className="tip-box ">
                  <input
                    onClick={handleClick}
                    type="radio"
                    value="0.05"
                    id="tip"
                    {...register("input")}
                  />
                  <div type="submit" className="btn">
                    {" "}
                    5%
                  </div>
                </div>
            
              </div>
              <div className="col-6 col-lg-4">
                <div className="tip-box ">
                  <input
                    onClick={handleClick}
                    type="radio"
                    value="0.10"
                    id="tip"
                    {...register("input")}
                  />
                  <div type="submit" className="btn">
                    {" "}
                    10%
                  </div>
                </div>
            
              </div>
              <div className="col-6 col-lg-4">
                <div className="tip-box ">
                  <input
                    onClick={handleClick}
                    type="radio"
                    value="0.15"
                    id="tip"
                    {...register("input")}
                  />
                  <div type="submit" className="btn">
                    {" "}
                    15%
                  </div>
                </div>
            
              </div>
              <div className="col-6 col-lg-4">
                <div className="tip-box ">
                  <input
                    onClick={handleClick}
                    type="radio"
                    value="0.25"
                    id="tip"
                    {...register("input")}
                  />
                  <div type="submit" className="btn">
                    {" "}
                    25%
                  </div>
                </div>
            
              </div>
            
              <div className="col-6 col-lg-4">
                <div className="tip-box ">
                  <input
                    onClick={handleClick}
                    type="radio"
                    value="0.50"
                    id="tip"
                    {...register("input")}
                  />
                  <div type="submit" className="btn">
                    {" "}
                    50%
                  </div>
                </div>
            
              </div>
             
              <div className="col-6 col-lg-4 ">
                <div className="tip-box ">
                  <input
                    className="form-control"
                    onChange={handleChangeCustom}
                    type="number"
                    id="custom"
                    placeholder="Custom"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12  section-people">
            <label>Number of People</label>
            <input
              onChange={handleChangePeople}
              id="numberPeople"
              className="form-control mt-2"
              type="number"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Calculator;
