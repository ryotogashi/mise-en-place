import styled from "@emotion/styled";
import * as React from "react";

import BasicTextInput from "./BasicTextInput";
import InputType from "./input-type";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  validations: [RegExp, string][];
}

const TextWithValidationMessages = styled.div`
  & > input {
    margin-bottom: 4px;
  }

  .errorColor {
    border-color: red;
  }

  .successColor {
    border-color: blue;
  }

  & > ul {
    width: 70%;
    margin: 0 auto;
    padding-left: 30px;
  }

  & > ul > li {
    list-style: none;
    text-align: left;
    font-size: 14px;
    color: red;
  }
`;

const TextInputWithValidation = ({ validations, ...rest }: Props) => {
  const [value, setValue] = React.useState("");
  const [errorMessages, setErrorMessages] = React.useState([] as String[]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.currentTarget.value;
    setValue(val);
    console.log(val);
    setErrorMessages(
      validations.map(([validation, errorMessage]) => {
        if (!val.match(validation)) return errorMessage;
      })
    );
  };
  return (
    <TextWithValidationMessages>
      <BasicTextInput
        type={InputType.TEXT}
        onChange={handleOnChange}
        value={value}
        className={
          value.length === 0
            ? ""
            : errorMessages[0] === undefined
            ? "successColor"
            : "errorColor"
        }
        {...rest}
      />
      <ul>
        {errorMessages.map((errorMesaage, i) => (
          <li key={i}>{errorMesaage}</li>
        ))}
      </ul>
    </TextWithValidationMessages>
  );
};

TextInputWithValidation.defaultProps = {
  type: InputType.TEXT
};

export default TextInputWithValidation;
