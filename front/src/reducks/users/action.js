export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  console.log(userState);
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      name: userState.name
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      name: ""
    }
  }
}