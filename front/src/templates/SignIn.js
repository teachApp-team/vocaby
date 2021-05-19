import React, {useState, useCallback} from 'react';
import TextInput from "../components/UIkit/TextInput";

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
  },[]);

  const inputPassword = useCallback((e) => {
      setPassword(e.target.value)
  },[]);

  return (
      <div className="c-section-container">
          <h2 className="u-text-center u-text__headline">ログイン</h2>
          <div className="module-spacer--medium" />
          <TextInput
              fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
              rows={1} value={email} type={"email"} onChange={inputEmail}
          />
          <TextInput
              fullWidth={true} label={"パスワード"} multiline={false} required={true}
              rows={1} value={password} type={"password"} onChange={inputPassword}
          />
      </div>
  );
};

export default SignIn;