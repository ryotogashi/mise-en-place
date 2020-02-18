import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import SignInForm from "./SignInForm";
import SearchList from "./SearchList";

const CompositeComponent = () => (
  <Section title="Composite Component">
    <IntroPage
      title="Searchiable List"
      description="Searchiable list. Choosable weather case-intensive or case-sensitive."
    >
      <SearchList isCaseIntensive={true} />
    </IntroPage>

    <IntroPage
      title="SignIn Form with Validation"
      description="Basic signin form with validation. Validation is for first, last name, phone number, email, password. These input notice with red color when you put invalid input and blue color when you put valid input"
    >
      <SignInForm />
    </IntroPage>
  </Section>
);
export default CompositeComponent;
