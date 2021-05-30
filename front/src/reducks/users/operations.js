import axios from 'axios';
import {signInAction} from "./action";

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
      },
      { withCredentials: true }
    ).then(response => {
        console.log("registration complete")
    }).catch(error => {
        console.log("registration failure")
    })
  }
}

export const signIn = (email, password) => {
  return (dispatch) => {
    if (email === "" || password === "") {
      return false
    }

    axios.post("http://localhost:3000/signin",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    ).then(response => {
      console.log("login complete")
      const user = response.data?.user?.name
      dispatch(signInAction({
        isSignedIn: true,
        name: user
      }))

    }).catch(error => {
      console.log(error)
      console.log("login failure")
    })
  }
}

export const listenAuthState = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true }).then(response => {
      console.log("Auth Check...");
      const logged_in = response.data.logged_in
      const name = response.data?.user?.name
      console.log(logged_in);
      console.log(name);
      dispatch(signInAction({
        isSignedIn: true,
        name: name
      }))
    })
  }
}