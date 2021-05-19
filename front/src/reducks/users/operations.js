import axios from 'axios';

export const signUp = (username, email, password, confirmPassword) => {
  return () => {
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      return false
    }
    if (password !== confirmPassword) {
      return false
    }

    axios.post("https://localhost:3000/signup",
      {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    ).then(response => {
        console.log("registration complete")
    }).catch(error => {
        console.log("registration failure")
    })
  }
}