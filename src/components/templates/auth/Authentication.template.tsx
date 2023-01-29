import { FormProvider, useForm } from "react-hook-form";
import { OrganismAuthentication } from "../../organisms/auth";
import { useAuthContext } from "../../context/Auth.context";
import { IAuthenticationFormField } from "../../../application/types";

const TemplateAuthentication = () => {
  const { signIn } = useAuthContext();

  const formMethods = useForm<IAuthenticationFormField>({
    mode: "all",
    defaultValues: {
      email: null,
      password: null,
    },
  });

  return (
    <FormProvider {...formMethods}>
      <OrganismAuthentication onSubmit={formMethods.handleSubmit(signIn)} />
    </FormProvider>
  );
};

export default TemplateAuthentication;
