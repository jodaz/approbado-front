import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native';
import { Routes } from '../routes';
import { updateSettings } from '@approbado/lib/services/settings.services'
import { getUser, useAuth } from '@approbado/lib/contexts/AuthContext';
import Row from '../../components/Row';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Container from '../../components/Container';
import TitleBar from '../../components/TitleBar';
import styled from 'styled-components/native';

const FormContainer = styled.View`
    margin-top: 40px;
    width: 100%;
    text-align: center;
    align-items: center;
    margin-bottom: 20px;
`;

const PrivacySettings = ({ navigation }) => {
    const { state: { user }, dispatch } = useAuth()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            show_name: user?.profile.show_name,
            public_profile: user?.profile.public_profile
        }
    });

    const onSubmit = async (values) => {
        const { success, status, data } = await updateSettings({ profile: values })

        if (success) {
            await getUser(dispatch)
            navigation.navigate(Routes.Settings)
        } else {
            console.log(status, data)
        }
    };

    return (
        <SafeAreaView>
            <Container>
                <TitleBar title="Ajustes de privacidad" />
                <FormContainer>
                    <Row size={1}>
                        <Checkbox
                            control={control}
                            label="Mostrar mi nombre cuando vean mi perfil"
                            name="show_name"
                        />
                    </Row>
                    <Row size={1}>
                        <Checkbox
                            control={control}
                            label="Permitir que otras personas puedan ver mi perfil como público"
                            name="public_profile"
                        />
                    </Row>
                    <Row size={6}>
                        <Button onPress={handleSubmit(onSubmit)} fullWidth>
                            Guardar cambios
                        </Button>
                    </Row>
                </FormContainer>
            </Container>
        </SafeAreaView>
    );
};

export default PrivacySettings;
