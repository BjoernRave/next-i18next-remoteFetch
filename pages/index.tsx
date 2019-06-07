import React from "react";
import { withNamespaces } from "../i18n";

const Index = ({ t }) => {
  return (
    <>
      <p>{t("Hello")}</p>
    </>
  );
};

Index.getInitialProps = () => {
  return { namespacesRequired: ["common"] };
};

export default withNamespaces("common")(Index);
