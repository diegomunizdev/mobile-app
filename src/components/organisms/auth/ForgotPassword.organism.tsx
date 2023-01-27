import { Center } from "native-base";
import { useFormContext } from "react-hook-form";
import { MoleculaForgotPassword } from "../../molecules/auth";

interface OrganismForgotPasswordProps {
  onSubmit: () => void;
}

const OrganismForgotPassword = ({ onSubmit }: OrganismForgotPasswordProps) => {
  const { control, formState } = useFormContext();

  return (
    <Center flex={1}>
      <MoleculaForgotPassword
        onSubmit={onSubmit}
        control={control}
        formState={formState}
      />
    </Center>
  );
};

export default OrganismForgotPassword;
