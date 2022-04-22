/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const fieldStyle = css`
  width: 100%;
  margin: .5rem auto;
`;

type MessageFieldProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const MessageField: React.VFC<MessageFieldProps> = (props) => {
  const {message, setMessage} = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <FormControl css={fieldStyle}>
      <TextField
        type="text"
        value={message}
        label="メッセージ"
        onChange={handleChange}
        variant="standard"
      />
    </FormControl>
  );
};

export default MessageField;
