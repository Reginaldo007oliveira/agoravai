
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import Groups from '@screens/Groups';
import theme from '@theme/index';
import { ActivityIndicator } from 'react-native';
import { Loading } from '@components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
 
<ThemeProvider theme={theme}>
      {/* teste se a font foi carregada ! fontsLoaded = valor invertido*/}
      {/* { fontsLoaded ? <Groups/> : <ActivityIndicator /> } */}
      { fontsLoaded ? <Groups/> : <Loading/> }
    </ThemeProvider>
  );
}


