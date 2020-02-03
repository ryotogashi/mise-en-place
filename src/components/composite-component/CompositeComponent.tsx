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

    <IntroPage title="SignIn Form" description="Basic signin form.">
      <SignInForm />
    </IntroPage>
  </Section>
);
export default CompositeComponent;
