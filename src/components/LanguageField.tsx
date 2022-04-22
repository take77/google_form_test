/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const fieldStyle = css`
  width: 100%;
  margin: .5rem auto;
`;

const formLabelStyle = css`
  margin: .5rem 0;
`;

type LanguageFieldProps = {
  language: {
    JavaScript: boolean;
    TypeScript: boolean;
    Ruby: boolean;
    Python: boolean;
    other: boolean;
  };
  setLanguage: React.Dispatch<React.SetStateAction<{
    JavaScript: boolean;
    TypeScript: boolean;
    Ruby: boolean;
    Python: boolean;
    other: boolean;
  }>>;
};

const LanguageField: React.VFC<LanguageFieldProps> = (props) => {
  const {language, setLanguage} = props;

  const handleChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage({
      ...language,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl css={fieldStyle}>
      <FormLabel css={formLabelStyle}>言語</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={language.JavaScript} onChange={handleChange} name="JavaScript" />
          }
          label="JavaScript"
        />
        <FormControlLabel
          control={
            <Checkbox checked={language.TypeScript} onChange={handleChange} name="TypeScript" />
          }
          label="TypeScript"
        />
        <FormControlLabel
          control={
            <Checkbox checked={language.Ruby} onChange={handleChange} name="Ruby" />
          }
          label="Ruby"
        />
        <FormControlLabel
          control={
            <Checkbox checked={language.Python} onChange={handleChange} name="Python" />
          }
          label="Python"
        />
        <FormControlLabel
          control={
            <Checkbox checked={language.other} onChange={handleChange} name="other" />
          }
          label="その他"
        />
      </FormGroup>
    </FormControl>
  );
};

export default LanguageField;
