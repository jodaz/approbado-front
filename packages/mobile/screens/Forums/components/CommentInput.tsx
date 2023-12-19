import * as React from 'react'
import { Controller } from 'react-hook-form';
import { ITextInputProps } from '../../../types';
import { SendHorizontal } from 'lucide-react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../styles/scaling';
import styled from 'styled-components/native';

const Input = styled.TextInput`
    height: 45px;
    font-size: 16px;
    padding: 0 10px;
    flex: 1;
`;

const InputContainer = styled.View`
    display: flex;
    border: ${props => `2px solid ${props.theme.palette.primary.light}`};
    flexDirection: row;
    height: fit-content;
    alignItems: center;
    padding-horizontal: ${props => horizontalScale(props.theme.space[2])}px;
    padding-vertical: ${props => verticalScale(props.theme.space[2])}px;
    border-radius: ${scaleFontSize(24)}px;
    background-color: #fff;
    flex: 1;
`;

const RootContainer = styled.View`
    display: flex;
    flexDirection: row;
    align-items: center;
    width: 100%;
    padding-vertical: ${props => verticalScale(props.theme.space[2])}px;
`

const Button = styled.TouchableOpacity`
    padding: 10px;
`

interface ICommentInputProps extends ITextInputProps {
    onHandleSubmit?: () => void;
    post_id?: any;
}

const CommentInput = ({
    control,
    validations,
    placeholder,
    name,
    icon,
    label,
    defaultValue,
    onHandleSubmit,
    post_id,
    ...restInputProps
} : ICommentInputProps) : JSX.Element => (
    <Controller
        control={control}
        render={({
            field: { onChange, ...restField },
        }) => (
            <RootContainer>
                <InputContainer>
                    <Input
                        placeholder={placeholder}
                        onChangeText={onChange}
                        {...restField}
                        {...restInputProps}
                    />
                    <Button onPress={onHandleSubmit}>
                        <SendHorizontal color='#2280ED' size={24} />
                    </Button>
                </InputContainer>
            </RootContainer>
        )}
        name={name}
        rules={validations?.rules}
        defaultValue={defaultValue}
    />
)

export default CommentInput
