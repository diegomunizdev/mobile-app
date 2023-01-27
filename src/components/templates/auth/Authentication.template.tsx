import { FormProvider, useForm } from "react-hook-form";
import { OrganismAuthentication } from "../../organisms/auth";
import { AuthenticationFormField } from "../../../application/domain/FormFields/auth.formFields";
import { useAuthContext } from "../../context/Auth.context";

const TemplateAuthentication = () => {
  const { signIn } = useAuthContext();

  const formMethods = useForm<AuthenticationFormField>({
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
