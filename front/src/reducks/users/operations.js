import axios from 'axios';

export const signUp = (name, email, password, confirmPassword) => {
  return () => {
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)
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