import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import SignInForm from "./SignInForm";
import SearchList from "./SearchList";
import { names } from "../../constants";

const Samples = () => (
  <Section title="Samples">
    <IntroPage
      title="Example list usage"
      description="List with search input. Choosable weather case-intensive or case-sensitive."
    >
      <SearchList list={names} isCaseIntensive={true} />
    </IntroPage>

    <IntroPage title="Signin Form" description="Basic signin form.">
      <SignInForm />
    </IntroPage>
  </Section>
);

export default Samples;
