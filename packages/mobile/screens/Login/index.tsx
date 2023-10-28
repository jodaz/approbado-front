import * as React from 'react'
import { Image, SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';
import { PASSWORD, USERNAME } from '@approbado/lib/utils/validations'
import { loginUser } from '@approbado/lib/services/auth.services'
import { Routes } from '../routes';
import Container from '../../components/Container';
import Button from '../../components/Button';
import styled from 'styled-components/native';
import TextInput from '../../components/TextInput';
import Text from '../../components/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Link from '../../components/Link';
import GoogleLoginButton from '../../components/GoogleLogin';
import FacebookLoginButton from '../../components/FacebookLogin';
import Row from '../../components/Row';

const FormContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    text-align: center;
    align-items: center;
    margin-bottom: 20px;
`;

const Login = ({ navigation }) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = async (values) => {
        try {
            const { success, data } = await loginUser(values);

            if (success) {
                await AsyncStorage.setItem('token', data.token)

                navigation.navigate(Routes.Home)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <SafeAreaView>
            <Container>
                <Row size={4} align='center'>
                    <Image source={require('../../assets/Logo.png')} />
                </Row>
                <Row size={1} align='center'>
                    <Text align='center'>
                        Iniciar sesión
                    </Text>
                </Row>
                <FormContainer>
                    <Row size={1}>
                        <TextInput
                            name="email"
                            validations={USERNAME}
                            control={control}
                            placeholder='Ingresa tu usuario'
                        />
                    </Row>
                    <Row size={1}>
                        <TextInput
                            name="password"
                            validations={PASSWORD}
                            control={control}
                            placeholder='Ingresa tu contraseña'
                            secureTextEntry
                        />
                    </Row>
                    <Link to={Routes.ForgetPassword} align='right'>
                        ¿Olvidaste tu contraseña?
                    </Link>
                </FormContainer>
                <Row size={1}>
                    <Button onPress={handleSubmit(onSubmit)} fullWidth>
                        Iniciar sesión
                    </Button>
                </Row>
                <Row size={2} align='center'>
                    <Text fontSize={14} fontWeight={400}>
                        Iniciar sesión con un tercero
                    </Text>
                </Row>
                <Row size={1} align='center'>
                    <GoogleLoginButton />
                </Row>
                <Row size={1} align='center'>
                    <FacebookLoginButton />
                </Row>
                <Row size={2} align='center'>
                    <Text fontSize={16}>
                        ¿Aún no tienes una cuenta?
                    </Text>
                    <Link to={Routes.SignUp} align='center'>
                        Crear una cuenta
                    </Link>
                </Row>
            </Container>
        </SafeAreaView>
    );
}

export default Login
