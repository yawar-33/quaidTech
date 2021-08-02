import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Dashboard(props) {
  console.log(props.location.state.userDetail)
  const [userData, setuserData] = useState(props.location.state.userDetail)

  //   useEffect(() => {
  //     axios
  //       .get('http://localhost:3456/api/user/getDetail/5')
  //       .then((response) => {
  //         console.log(response)
  //         setuserData(response.data.userData)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }, [])
  return (
    <div>
      <h1>Name : {userData.fullName}</h1>
      <h1>Country : {userData.countryId}</h1>
    </div>
  )
}
