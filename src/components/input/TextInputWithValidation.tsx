import styled from "@emotion/styled";
import * as React from "react";

import BasicTextInput from "./BasicTextInput";
import InputType from "./input-type";
import { primary, secondary, danger } from "../../constants/colors";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  validations: [RegExp | Function, string][];
}

const TextWithValidationMessages = styled.div`
  & > input {
    border-color: ${secondary};
    color: ${secondary};

    &::placeholder {
      color: ${secondary};
    }
  }

  & > .errorStyle {
    margin-bottom: 4px;
    border-color: ${danger};
  }

  & > .successStyle {
    border-color: ${primary};
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
    color: ${danger};
  }
`;

const TextInputWithValidation = ({ validations, ...rest }: Props) => {
  const [value, setValue] = React.useState("");
  const [errorMessages, setErrorMessages] = React.useState([] as String[]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.currentTarget.value;
    setValue(val);

    setErrorMessages(
      validations
        .map(([validation, errorMessage]) => {
          if (typeof validation === "function") {
            if (validation(val)) return errorMessage;
          } else {
            if (val.match(validation)) return errorMessage;
          }
        })
        .filter(item => item !== undefined)
    );
  };
  return (
    <TextWithValidationMessages>
      <BasicTextInput
        type={InputType.TEXT}
        onChange={handleOnChange}
        value={value}
        className={value.length === 0 ? "" : 0 < errorMessages.length ? "errorStyle" : "successStyle"}
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
  type: InputType.TEXT,
  validations: []
};

export default TextInputWithValidation;
