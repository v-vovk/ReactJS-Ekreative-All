import React, { useState, useEffect } from 'react'
import API from '../services/services'

// export const UserPage: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [name, setName] = useState('')
//   const [avatar, setAvatar] = useState('')
//   const [email, setEmail] = useState('')

//   useEffect(() => {
//     async function loadData() {
//       let userData = await API.get('/', {
//         params: {
//           results: 1,
//           inc: 'name,email,picture'
//         }
//       })

//       // Parse the results for ease of use.
//       userData = userData.data.results[0]

//       setName(`${userData.name.first} ${userData.name.last}`)
//       setAvatar(userData.picture.large)
//       setEmail(userData.email)
//       setIsLoading(false)
//     }
//     loadData()
//   }, [])

//   return (
//     <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
//   )
// }
