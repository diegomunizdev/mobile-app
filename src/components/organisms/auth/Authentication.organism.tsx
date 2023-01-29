import { Center } from "native-base";
import { useFormContext } from "react-hook-form";

import { MoleculaAuthentication } from "../../molecules/auth";

interface OrganismAuthenticationProps {
  onSubmit: () => void;
}

const OrganismAuthentication = ({ onSubmit }: OrganismAuthenticationProps) => {
  const { control, formState } = useFormContext();

  return (
    <Center flex={1}>
      <MoleculaAuthentication
        onSubmit={onSubmit}
        control={control}
        formState={formState}
      />
    </Center>
  );
};

export default OrganismAuthentication;
