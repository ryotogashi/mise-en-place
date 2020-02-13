import * as React from "react";

import TextInputWithValidation from "./TextInputWithValidation";

const validations: [RegExp | Function, string][] = [
  [
    (val: string): boolean => 0 !== val.length && !val.match(/^[0-9a-z_./?-]+@([0-9a-z-]+\.)+[0-9a-z-]+$/),
    "The email address isn't valid."
  ]
];

export default {
  title: "Input",
  component: TextInputWithValidation
};

export const _TextInputWithValidation = () => (
  <TextInputWithValidation
    validations={validations}
    placeholder="text input with email validation"
  ></TextInputWithValidation>
);
