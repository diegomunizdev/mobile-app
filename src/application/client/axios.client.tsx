import axios from "axios";
import { Box, IToastProps, Icon, Text, useToast } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const interceptorRequest = (value: any): any => {
  // injetar token de autenticação
  console.log("interceptorRequest", value);
};

const interceptorError = (show: (props: IToastProps) => any, error: any) => {
  let title: string = "Erro interno";
  let subtitle: string = "Não possível processar a solicitação";
  let icon: string = "alert-circle-outline";

  if (error.message === "Network Error") {
    title = "Erro de rede";
    subtitle = "Verifique sua conexão com a internet";
    icon = "close-network";
  }

  show({
    render: () => (
      <Box
        bg="error.500"
        flexDirection="row"
        alignItems="center"
        rounded="sm"
        p={3}
      >
        <Icon
          as={<MaterialCommunityIcons />}
          color="#FFFFFF"
          name={icon || ""}
          mr={2}
          size={8}
        />
        <Box flexDirection="column">
          <Text color="#FFFFFF" bold>
            {title}
          </Text>
          <Text color="#FFFFFF">{subtitle}</Text>
        </Box>
      </Box>
    ),
    placement: "top",
  });
};

const useAxios = () => {
  const { show } = useToast();

  const axiosInstance = axios.create({
    // baseURL qualquer para teste
    baseURL: "http://localhost:3001/api",
    httpsAgent: { rejectUnauthorized: false },
  });

  axiosInstance.interceptors.request.use((value) => {
    value.headers.Authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MDdkMTU4NS1jNmMzLTQwMDctYmRkMy1hNWU2ZDY3MjUwMDciLCJpYXQiOjE2NzU5MDM1NjcsImV4cCI6MTY3NTk4OTk2N30.LmQy9CuSQw8Z9M0O8zlMxKS3dEYsdYqTeSFuvZfC6DQ";
    return value;
  });

  axiosInstance.interceptors.response.use(undefined, (error) =>
    interceptorError(show, error)
  );

  return { axiosInstance };
};

export default useAxios;
