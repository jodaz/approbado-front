import * as React from 'react'
import {
    Row,
    Button,
    TextInput
} from '../../../components';
import { Routes } from '../../routes';
import { ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import DateTimePicker from '../../../components/DateTimePicker';
import { Calendar, Clock } from 'lucide-react-native';

const StepOne = ({ navigation, ...restProps }) => {
    const { control, handleSubmit, formState } = useForm();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Row>
                <TextInput
                    label='Título de la reunión'
                    control={control}
                    name='title'
                    placeholder='Ingresar un título'
                />
            </Row>
            <Row direction='row'>
                <View style={{ flex: 1 }}>
                    <DateTimePicker
                        label='Día'
                        control={control}
                        mode='date'
                        name='date'
                        icon={<Calendar />}
                    />
                </View>
                <View style={{ marginRight: 10 }} />
                <View style={{ flex: 1 }}>
                    <DateTimePicker
                        label='Hora'
                        control={control}
                        mode='time'
                        name='time'
                        icon={<Clock />}
                    />
                </View>
            </Row>
            <Row>
                <TextInput
                    control={control}
                    name='description'
                    placeholder='Añadir descripción'
                    multiline
                    numberOfLines={8}
                    editable
                    label='Descripción'
                />
            </Row>
            <Row>
                <Button onPress={() => navigation.navigate(Routes.CreateEventStepTwo)}>
                    Añadir amigos
                </Button>
            </Row>
            <Row>
                <Button variant='outlined' onPress={() => navigation.goBack()}>
                    Descartar
                </Button>
            </Row>
        </ScrollView>
    );
}

export default StepOne
