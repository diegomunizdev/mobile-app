import HomeProvider from "../../context/Home.context";
import { OrganismHomeHeader } from "../../organisms/home";

const TemplateHome = () => {
  return <OrganismHomeHeader />;
};

export default () => (
  <HomeProvider>
    <TemplateHome />
  </HomeProvider>
);
