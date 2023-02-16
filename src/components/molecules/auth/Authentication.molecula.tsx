import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Control, Controller, FieldValues, FormState } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Button, FormControl, Icon, Input, Stack } from "native-base";
import { useAuthContext } from "../../context/Auth.context";

interface MoleculaAuthenticationProps {
  control: Control<FieldValues, any>;
  formState: FormState<FieldValues>;
  onSubmit: () => void;
}

const MoleculaAuthentication = ({
  control,
  formState,
  onSubmit,
}: MoleculaAuthenticationProps) => {
  const { navigate, goBack } = useNavigation();
  const { state } = useAuthContext();

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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

      <Controller
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Senha é obrigatório",
          },
        }}
        render={({
          field: { value, onBlur, onChange },
          fieldState: { error },
        }) => (
          <FormControl isRequired isInvalid={!!error}>
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="Senha"
              variant="underlined"
              isInvalid={!!error}
              width="full"
              value={value}
              leftElement={
                <Icon
                  name="lock-outline"
                  as={<MaterialCommunityIcons />}
                  marginX={2}
                  size={6}
                />
              }
              rightElement={
                <Icon
                  name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                  as={<MaterialCommunityIcons />}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  marginX={2}
                  size={6}
                />
              }
              onBlur={onBlur}
              onChangeText={(text: string) => onChange(text)}
            />
            <Box
              justifyContent={!!error ? "space-between" : "flex-end"}
              flexDirection="row"
            >
              <FormControl.ErrorMessage>
                {error?.message}
              </FormControl.ErrorMessage>
              <TouchableOpacity onPress={() => navigate("forgot-password")}>
                <FormControl.HelperText>Esqueci a senha</FormControl.HelperText>
              </TouchableOpacity>
            </Box>
          </FormControl>
        )}
      />

      <Button
        onPress={() => {
          onSubmit();
        }}
        isLoading={state.loading}
        isDisabled={!formState.isValid}
      >
        ENTRAR
      </Button>

      <Button variant="link" onPress={() => goBack()}>
        Voltar
      </Button>
    </Stack>
  );
};

export default MoleculaAuthentication;
