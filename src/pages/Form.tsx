/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import NameField from "../components/NameField";
import GenderField from "../components/GenderField";
import LanguageField from "../components/LanguageField";
import MessageField from "../components/MessageField";

import FormKeys from "../formKeys";

const formWrapperStyle = css`
  width: 90%;
  margin: 2rem auto;
`;

const formStyle = css`
  width: 100%;
  margin: 1rem auto;
`;

const submitButtonStyles = css`
  display: block;
  height: 3rem;
  margin: 1rem auto;
`;

const Form: React.VFC = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState({
    JavaScript: false,
    TypeScript: false,
    Ruby: false,
    Python: false,
    other: false,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true)
    const submitParams = new FormData();

    submitParams.append(FormKeys.name, name);
    submitParams.append(FormKeys.gender, gender);
    submitParams.append(FormKeys.message, message);
    Object.entries(language).forEach(([key, value]) => {
      value && submitParams.append(FormKeys.language, key);
    });

    Axios.post(FormKeys.corsAnywhere + FormKeys.formUrl, submitParams).then(() => {
      setLoading(false);
      navigate("/complete");
    }).catch(() => {
      setLoading(false);
      console.log('エラーです');
    })
  };

  return(
    <div css={formWrapperStyle}>
      <Typography variant="h5" align="center">真似しちゃいけないフォーム</Typography>
      <form css={formStyle}>
        <NameField
          name={name}
          setName={setName}
        />
        <GenderField
          gender={gender}
          setGender={setGender}
        />
        <LanguageField
          language={language}
          setLanguage={setLanguage}
        />
        <MessageField
          message={message}
          setMessage={setMessage}
        />
        <Button fullWidth variant="contained" css={submitButtonStyles} onClick={handleClick}>
          フォームを送信
        </Button>
      </form>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Form;
