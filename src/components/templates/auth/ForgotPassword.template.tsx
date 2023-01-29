import { FormProvider, useForm } from "react-hook-form";
import { OrganismForgotPassword } from "../../organisms/auth";
import { useAuthContext } from "../../context/Auth.context";
import { IForgotPasswordFormField } from "../../../application/types";

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
