import * as React from 'react'
import { useForm } from 'react-hook-form';
import Container from '../../components/Container';
import Text from '../../components/Text';

const Home = ({ navigation }) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = async (values) => {
    };

    return (
        <Container>
            <Text>Home</Text>
        </Container>
    );
}

export default Home
