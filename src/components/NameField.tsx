/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const fieldStyle = css`
  width: 100%;
  margin: .5rem auto;
`;

type NameFieldProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameField: React.VFC<NameFieldProps> = (props) => {
  const {name, setName} = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <FormControl css={fieldStyle}>
      <TextField
        type="text"
        value={name}
        label="名前"
        onChange={(event) => handleChange(event)}
        variant="standard"
      />
    </FormControl>
  );
};

export default NameField;
