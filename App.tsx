import { NativeBaseProvider, extendTheme } from "native-base";
import Routes from "./src/components/views/routes/Routes";

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#ecf0f9",
        100: "#c5d2ec",
        200: "#b2c2e6",
        300: "#9fb3e0",
        400: "#7895d3",
        500: "#5277c7",
        600: "#14213d", // default
        700: "#2c4987",
        800: "#1f3460",
        900: "#14213d", // default
      },
      secondary: {
        50: "#fff5e6",
        100: "#feebcd",
        200: "#fee1b3",
        300: "#fed89a",
        400: "#fece81",
        500: "#fdc468",
        600: "#fdba4e",
        700: "#fdb035",
        800: "#fda61c",
        900: "#fca311",
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;
