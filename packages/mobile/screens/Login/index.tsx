import * as React from 'react'
import { Image } from 'react-native';
import { useForm } from 'react-hook-form';
import { PASSWORD, USERNAME } from '@approbado/lib/utils/validations'
import { loginUser } from '@approbado/lib/services/auth.services'
import { Routes } from '../routes';
import Button from '../../components/Button';
import styled from 'styled-components/native';
import TextInput from '../../components/TextInput';
import Text from '../../components/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
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
        <Container>
            <Image source={require('../../assets/Logo.png')} />
            <Text>
                Iniciar sesión
            </Text>
            <TextInput
                name="email"
                validations={USERNAME}
                control={control}
                placeholder='Ingresa tu usuario'
            />
            <TextInput
                name="password"
                validations={PASSWORD}
                control={control}
                placeholder='Ingresa tu contraseña'
            />
            <Text>
                ¿Olvidaste tu contraseña?
            </Text>
            <Button onPress={handleSubmit(onSubmit)}>
                Iniciar sesión
            </Button>
            <Text>
                ¿Aún no tienes una cuenta?
            </Text>
            <Text>
                Crear una cuenta
            </Text>
        </Container>
    );
}

export default Login
