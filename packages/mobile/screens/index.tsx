import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from "./routes";
import Onboarding from "./onboarding"
import Presentation from "./presentation"
import Login from "./Login"
import CreateAccount from "./SignUp/CreateAccount"
import Home from "./Home"
import CompleteProfile from './SignUp/CompleteProfile';

const Stack = createNativeStackNavigator();

const MainScreen = () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Routes.Onboarding}
    >
        <Stack.Screen name={Routes.Onboarding} component={Onboarding}  />
        <Stack.Screen name={Routes.Presentation} component={Presentation}  />
        <Stack.Screen name={Routes.Login} component={Login}  />
        <Stack.Screen name={Routes.SignUp} component={CreateAccount}  />
        <Stack.Screen name={Routes.CompleteProfile} component={CompleteProfile}  />
        <Stack.Screen name={Routes.Home} component={Home}  />
    </Stack.Navigator>
)

export default MainScreen
