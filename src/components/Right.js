import React, { useEffect, useRef, useState } from 'react'
import competed from '../images/icon-complete.svg'
import { FormInput, FormInputLast } from './FormInput'
import { inputDetails, last, second, } from './InputDeities'
import lego from '../images/card-logo.svg'



const Right = () => {

  const [formValue, setFormValue] = useState({ username: "", number: "", month: "", year: "", csv: "" });

  const [confirm, setConfirm] = useState(false)
  const [subMIt, setSubMIt] = useState(false)
  const [errorV, setErrorV] = useState({})

  const handelSubmit = e => {
    e.preventDefault()
    if (Object.keys(e.target.value).length === 0) {
      setSubMIt(false)
    } else {
      console.log(formValue)
      setSubMIt(true)
    }
  }
  const handelOkayed = () => {
    if (Object.keys(errorV).length === 0 && subMIt) {
      setConfirm((prev) => !prev)
    }
  }
  const isContinue = () => {
    setFormValue({ username: "", number: "", month: "", year: "", csv: "" })
    setConfirm((prev) => !prev)
  }

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value.toUpperCase().trim(), });
    console.log(formValue)
    setErrorV(validate(formValue))
  };

  const validate = (values) => {
    const error = {};
    const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i;
    const regexNum = /[0-9]/i;
    if (!values.username) {
      error.username = 'Name is required'
    } else if (!regexName.test(values.username)) {
      error.username = 'Wrong format'
    }
    if (!values.number) {
      error.number = "Can't be blank"
    } else if (!regexNum.test(values.number)) {
      error.number = 'Wrong formate numbers only'
    } else if (values.number.length > 12) {
      error.number = 'Maximum number 12'
    }
    if (!values.month) {
      error.month = "Can't be blank"
    } else if (values.month.length > 2) {
      error.month = 'Invalid month'
    }
    if (!values.year) {
      error.year = "Can't be blank"
    } else if (values.year.length > 4) {
      error.year = 'invalid'
    }
    if (!values.csv) {
      error.csv = "Can't be blank"
    } else if (values.csv.length > 3) {
      error.csv = 'Invalid'
    }

    return error;
  }
  console.log(errorV)
  console.log(formValue)

  return (
    <>

      <div className="left">
        <div className="cards">
          <div className='card_front'>
            <div className="card_frontContext">
              <img src={lego} alt="" />
              <div>
                <h5>
                  {formValue.number || "0000 0000 0000 0000"}
                </h5>
                <div className='cardFrondText'>
                  <p>{formValue.username || "---- -----"}</p><p>{formValue.month || "00"}<span>/</span>{formValue.year || "00"}</p>
                </div>
              </div>

            </div>
          </div>
          <div className='card_back'>
            <p>
              {formValue.csv || "000"}
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <div  >
          {!confirm ? (
            <>
              <form className="right_contents" onSubmit={handelSubmit} >

                {inputDetails.map((inputProps) => (

                  <FormInput key={inputProps.id} {...inputProps} onChange={onChange} errorV={errorV} />
                ))}
                <div className='flex
              '>
                  <div className='flexO'>
                    <p>EXP.DATE (MM/CC)</p>

                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                      {second.map((input) => (

                        <FormInputLast key={input.id} {...input} onChange={onChange} />
                      ))}
                    </div>
                    <small className='onSmall'>{errorV.year || errorV.month}</small>
                  </div>
                  <div className='flexO'>

                    <p>CSV</p>
                    {last.map((input) => (
                      <FormInputLast key={input.id}  {...input} style={{ width: '130px', marginRight: '0' }} onChange={onChange} errorV={errorV} />))}
                  </div>
                </div>


                <button onClick={handelOkayed} className='confirmBtn' >Confirm</button>
              </form>
            </>
          ) : (

            <div className='afterConfirm'>
              <img src={competed} alt="" />
              <h1>THANK YOU!</h1>
              <p>
                We've add your card details
              </p>
              <button onClick={isContinue} className='confirmBtn' >Continue</button>
            </div>
          )}
          <ul>
          </ul>
        </div>
      </div>
    </>
  )
}


export default Right