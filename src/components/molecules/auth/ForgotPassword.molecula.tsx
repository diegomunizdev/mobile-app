import {
  Alert,
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from "native-base";
import { Control, Controller, FieldValues, FormState } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface MoleculaForgotPasswordProps {
  control: Control<FieldValues, any>;
  formState: FormState<FieldValues>;
  onSubmit: () => void;
}

const MoleculaForgotPassword = ({
  control,
  formState,
  onSubmit,
}: MoleculaForgotPasswordProps) => {
  const { goBack } = useNavigation();

  return (
    <Stack direction="column" space={10} m={8}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "E-mail é obrigatório",
          },
          minLength: { value: 5, message: "E-mail invalido" },
        }}
        render={({
          field: { value, onBlur, onChange },
          fieldState: { error },
        }) => (
          <FormControl isRequired isInvalid={!!error}>
            <Input
              type="text"
              placeholder="E-mail"
              variant="underlined"
              isInvalid={!!error}
              value={value}
              width="full"
              leftElement={
                <Icon
                  as={<MaterialCommunityIcons name="account-outline" />}
                  marginX={2}
                  size={6}
                />
              }
              onBlur={onBlur}
              onChangeText={(text: string) => onChange(text)}
            />
            <FormControl.ErrorMessage>
              {error?.message}
            </FormControl.ErrorMessage>
          </FormControl>
        )}
      />

      <Alert status="info">
        <VStack>
          <HStack space={2} alignItems="center">
            <Alert.Icon />
            <Text bold>Sobre a redefinição de senha</Text>
          </HStack>
          <Box pl="6">
            Será enviado para o seu e-mail, o passo a passo para alterar a
            senha.
          </Box>
        </VStack>
      </Alert>

      <Button isDisabled={!formState.isValid}>ENVIAR</Button>

      <Button variant="link" onPress={() => goBack()}>
        Voltar
      </Button>
    </Stack>
  );
};

export default MoleculaForgotPassword;
