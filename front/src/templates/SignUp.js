import React, {useState, useCallback} from 'react';
import TextInput from "../components/UIkit/TextInput";
import PrimaryButton from "../components/UIkit/PrimaryButton";
import {signUp} from '../reducks/users/operations';
import ChoiceButton from '../components/UIkit/ChoiceButton';
import {useDispatch, useSelector} from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch()
  const selector  = useSelector((state) => state)

  console.log(selector.users);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
  },[setEmail]);

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value)
  },[setPassword]);

  const inputConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value)
  },[setConfirmPassword]);

  const inputName = useCallback((e) => {
    setName(e.target.value)
  },[setName]);


  const handleClick = () => {
    dispatch(signUp(name, email, password, confirmPassword))
  }

  return (
    <div>
      <h2>アカウント登録</h2>
      <TextInput
      fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
      rows={1} value={name} type={"text"} onChange={inputName}
      />
      <TextInput
        fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
        rows={1} value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput
        fullWidth={true} label={"パスワード（半角英数字）"} multiline={false} required={true}
        rows={1} value={password} type={"password"} onChange={inputPassword}
      />
      <TextInput
        fullWidth={true} label={"パスワードの再確認"} multiline={false} required={true}
        rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
      />
      <PrimaryButton
        label={"アカウントを登録する"}
        onClick={handleClick}
      />
      <ChoiceButton bgColor="#D3A760" text="りんご" textColor="#000" />
    </div>
  )
}

export default SignUp;
