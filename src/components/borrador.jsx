import React from 'react'
import logo from "../assets/images/logo.svg"


const borrador = () => {
  return (
    <main> 
      <div className='d-flex justify-content-center mt-5'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='container-fluid section-container-main'>
        <div className='row section-calculator'>
          <div className='col-12 col-md-6 section-left'> 
            <div className='row '>
            <form>
            <div className='col-12'>
              <label>Bill</label>
              <input  className='form-control' type="number" />
            </div>
              <label className='my-3 d-grid'> select tip %</label>
              <div className='col-12 section-button'>
              <button type='submit' className='btn btn-primary'>5%</button>
              <button type='submit' className='btn btn-primary'>10%</button>
              </div>
              <div className='col-12 section-button'>
              <button type='submit' className='btn btn-primary'>15%</button>
              <button type='submit' className='btn btn-primary'>25%</button>
              </div>
              <div className='col-12 section-button'>
              <button type='submit' className='btn btn-primary'>50%</button>
              <input className='form-control'  type="number" placeholder='custom' />
              </div>
             
              
              <div className='col-12 '>
              <label>Number of People</label>
              <input className='form-control' type="number" placeholder='0'/>
            </div>
            </form>
            </div>
          </div>
          <div className='separate'/>
          <div className='col-12 col-md-6 section-right'> 
            <div className='row section-result'>
            <div className='col-6'>
              <h5>Tip Amount</h5>
              <p>/person</p>
            </div>
            <div className='col-6 '>
              <h1  className='text-end'> $4.27 </h1>
            
            </div>
            <div className='col-6'>
              <h5>Total </h5>
              <p>/person</p>
            </div>
            <div className='col-6'>
              <h1 className='text-end'> $32.79 </h1>
            
            </div>
            <div className='col-12'>
              <button className='btn btn-reset'> RESET </button>
            </div>
          
           </div>

            </div>
          
           </div>
        </div>
      
     
    </main>
  )
}

export default borrador