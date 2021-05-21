import React, {useState, useCallback} from 'react';
import TextInput from "../components/UIkit/TextInput";
import PrimaryButton from "../components/UIkit/PrimaryButton";
import {signIn} from '../reducks/users/operations';
import {useDispatch} from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
  },[]);

  const inputPassword = useCallback((e) => {
      setPassword(e.target.value)
  },[]);

  return (
      <div>
          <h2>ログイン</h2>
          <TextInput
              fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
              rows={1} value={email} type={"email"} onChange={inputEmail}
          />
          <TextInput
              fullWidth={true} label={"パスワード"} multiline={false} required={true}
              rows={1} value={password} type={"password"} onChange={inputPassword}
          />
          <PrimaryButton label={"ログイン"} onClick={() => dispatch(signIn(email, password))} />
      </div>
  );
};

export default SignIn;