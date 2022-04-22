/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const fieldStyle = css`
  width: 100%;
  margin: .5rem auto;
`;

const formLabelStyle = css`
  margin: .5rem 0;
`;

type GenderFieldProps = {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
};

const GenderField: React.VFC<GenderFieldProps> = (props) => {
  const {gender, setGender} = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return(
    <FormControl css={fieldStyle}>
      <FormLabel css={formLabelStyle}>性別</FormLabel>
      <RadioGroup
        defaultValue="man"
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel value="man" control={<Radio />} label="おのこ" />
        <FormControlLabel value="woman" control={<Radio />} label="おなご" />
        <FormControlLabel value="other" control={<Radio />} label="その他" />
      </RadioGroup>
    </FormControl>
  );
};

export default GenderField;
