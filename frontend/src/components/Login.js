import axios from 'axios'
import React, { useState } from 'react'
import { Redirect } from 'react-router'

export default function Login() {
  let initLoginModel = {
    fullName: 'yawar2',
    email: '',
    password: '',
    countryId: '1',
  }

  let initValidateModel = {
    valPassword: '',
    isvalid: false,
  }
  const [loginModel, setloginModel] = useState(initLoginModel)
  const [validateModel, setvalidateModel] = useState(initValidateModel)
  const [token, settoken] = useState('')
  const [userDetail, setUserDetail] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    let model = { ...loginModel }
    model[name] = name === 'email' ? value.toUpperCase() : value
    setloginModel(model)
  }
  const loginUser = () => {
    // let loginModel = { ...loginModel }
    let validationModel = { ...validateModel }
    if (
      loginModel.email === '' ||
      loginModel.email === null ||
      loginModel.email === undefined
    ) {
      validationModel.valPassword = (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          Please Enter Password
        </div>
      )
      validationModel.isvalid = true
    } else {
      validationModel.valPassword = ''
      if (validationModel.isvalid === false) {
        validationModel.isvalid = false
      }
    }

    if (validationModel.isvalid) {
      setvalidateModel(validationModel)
      return
    } else {
      console.log(loginModel)
      // return
      axios
        .post('http://localhost:3456/api/user/register', loginModel)
        .then((res) => {
          console.log(res)
          settoken(res.data.jsontoken)
          setUserDetail(res.data.userCollection)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  if (token !== '') {
    return (
      <Redirect
        // to="/dashboard"
        to={{
          pathname: '/dashboard',
          state: { userDetail: userDetail },
        }}
      />
    )
  }
  return (
    <div id="login" className="">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center">Login</h3>
                <div className="form-group">
                  <label htmlFor="email" className="">
                    Username:
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={loginModel.email}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="">
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    value={loginModel.password}
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={handleChange}
                  />
                  {validateModel.valPassword}
                </div>
                <div class="row align-items-center remember d-flex">
                  <p>
                    Forget Password?<a href="./">Reset</a>
                  </p>
                </div>
                <br />
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <input
                        type="button"
                        class="btn btn-primary btn-lg btn-block w-100"
                        value="Login"
                        onClick={loginUser}
                      />
                    </div>
                    {/* <div className="col">
                      <a href="./" className="">
                        Register here
                      </a>
                    </div> */}
                  </div>

                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
