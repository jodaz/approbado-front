import * as React from 'react';
import SubthemeCard from './SubthemeCard'
import ListContainer from '../components/ListContainer'
import { apiProvider as axios } from '@approbado/lib/api'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { useMediaQuery } from '@material-ui/core'
import getQueryFromParams from '@approbado/lib/utils/getQueryFromParams'
import CreateButton from '../components/CreateButton'
import GridList from '@approbado/lib/components/GridList'

const FileList = ({ record }) => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const initialValues = { trivia_id: record.id }
    const [filter, setFilter] = React.useState(initialValues)
    const [subthemes, setSubthemes] = React.useState([])

    const fetchSubthemes = async () => {
        const res = await axios({
            method: 'GET',
            url: '/subthemes',
            params: getQueryFromParams({ filter })
        })

        setSubthemes(res.data.data);
    }

    const handleOnChange = (e) => {
        if (e.currentTarget.value) {
            console.log(e.currentTarget.value)
        } else {
            setFilter(initialValues)
        }
    }

    React.useEffect(() => {
        fetchSubthemes()
    }, [filter])

    return (
        <ListContainer
            actions={
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    margin: '1rem 0'
                }}>
                    <Box width={isSmall ? '100%' : '25%'}>
                        <TextField
                            onChange={handleOnChange}
                            placeholder='Buscar'
                            fullWidth
                        />
                    </Box>
                    <CreateButton
                        to={`/trivias/${record.id}/subthemes/create`}
                        label='Crear'
                    />
                </Box>
            }
            list={
                <GridList
                    data={subthemes}
                    component={<SubthemeCard />}
                />
            }
        />
    );
}

export default FileList;
