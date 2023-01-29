import { FormProvider, useForm } from "react-hook-form";
import { OrganismForgotPassword } from "../../organisms/auth";
import { IForgotPasswordFormField } from "../../../application/domain/FormFields/auth.formFields";
import { useAuthContext } from "../../context/Auth.context";

const TemplateForgotPassword = () => {
  const { signIn } = useAuthContext();

  const formMethods = useForm<IForgotPasswordFormField>({
    mode: "all",
    defaultValues: {
      email: null,
    },
  });

  return (
    <FormProvider {...formMethods}>
      <OrganismForgotPassword onSubmit={formMethods.handleSubmit(signIn)} />
    </FormProvider>
  );
};

export default TemplateForgotPassword;
