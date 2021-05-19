import React, {useState, useCallback} from 'react';
import TextInput from "../components/UIkit/TextInput";

const SignUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("")

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
  },[setEmail]);

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value)
  },[setPassword]);

  const inputConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value)
  },[setConfirmPassword]);

  const inputUsername = useCallback((e) => {
    setUsername(e.target.value)
  },[setUsername]);

  return (
    <div>
      <h2>アカウント登録</h2>
      <TextInput
      fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
      rows={1} value={username} type={"text"} onChange={inputUsername}
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
    </div>
  )
}

export default SignUp;