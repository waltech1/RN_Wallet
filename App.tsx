import Welcome from './screens/Welcome';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoader] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoader) {
    return <AppLoading />
  }

  return (
    <Welcome />
  );
};
