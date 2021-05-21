import axios from 'axios';

export const signUp = (name, email, password, confirmPassword) => {
  return () => {
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      return false
    }
    if (password !== confirmPassword) {
      return false
    }

    axios.post("http://localhost:3000/signup",
      {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      }
    ).then(response => {
        console.log("registration complete")
    }).catch(error => {
        console.log("registration failure")
    })
  }
}

export const signIn = (email, password) => {
  return () => {
    if (email === "" || password === "") {
      return false
    }

    axios.post("http://localhost:3000/signin",
      {
        email: email,
        password: password,
      }
    ).then(response => {
      console.log("login complete")
      console.log(response)
    }).catch(error => {
      console.log("login failure")
    })
  }
}