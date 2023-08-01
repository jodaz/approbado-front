import * as React from 'react'
import InputContainer from '@approbado/lib/components/InputContainer'
import { apiProvider as axios } from '@approbado/lib/api'
import SelectInput from '@approbado/lib/components/SelectInput'
import Box from '@material-ui/core/Box'

const SelectTriviaInput = ({ disabled }) => {
    const [options, setOptions] = React.useState([])

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`trivias`)
        setOptions(data)
    }, []);

    React.useEffect(() => {
        fetchOptions();
    }, [])

    return (
        <InputContainer disabled={disabled} label="Trivias" xs={12} md={6}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (
                <SelectInput
                    name='trivias_ids'
                    multiple
                    options={options}
                    inputProps={{
                        placeholder: 'Seleccione un tema específico'
                    }}
                />
            )}
        </InputContainer>
    )
}

export default SelectTriviaInput
