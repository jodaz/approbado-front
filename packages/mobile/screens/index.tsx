import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from "./routes";
import { useAuth } from '@approbado/lib/contexts/AuthContext';
import Onboarding from "./onboarding"
import Presentation from "./presentation"
import Login from "./Login"
import CreateAccount from "./SignUp/CreateAccount"
import ForgetPassword from "./ForgetPassword"
import CompleteProfile from './SignUp/CompleteProfile';
import ConfirmPhone from './ConfirmPhone';
import BottomNav from '../components/BottomNav';
import SettingsStack from './Settings';
import CreateNewPassword from './CreateNewPassword';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
    const { state } = useAuth();

    if (!state.isAuth) {
        return (
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={Routes.Onboarding}
            >
                <Stack.Screen name={Routes.Onboarding} component={Onboarding}  />
                <Stack.Screen name={Routes.Presentation} component={Presentation}  />
                <Stack.Screen name={Routes.Login} component={Login}  />
                <Stack.Screen name={Routes.SignUp} component={CreateAccount}  />
                <Stack.Screen name={Routes.CompleteProfile} component={CompleteProfile}  />
                <Stack.Screen name={Routes.ForgetPassword} component={ForgetPassword}  />
                <Stack.Screen name={Routes.ConfirmPhone} component={ConfirmPhone}  />
                <Stack.Screen name={Routes.CreateNewPassword} component={CreateNewPassword}  />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={Routes.Home}
        >
            <Stack.Screen name={Routes.Home} component={BottomNav}  />
            <Stack.Screen name={Routes.Settings} component={SettingsStack} />
        </Stack.Navigator>
    )
}

export default MainScreen
