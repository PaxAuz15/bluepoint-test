import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { getUsers } from "../services/users.services"

const Users = () => {

    const [state, setState] = useState({
        reload: false,
        loading: false
    })
    const [dataUsers, setDataUsers] = useState([])


    useEffect(() => {
        setState(old => ({ ...old, loading: true }))
        const getUsersData = async () => {
            try {
                const users = await getUsers()
                setDataUsers(users.data)
                setState(old => ({ ...old, loading: false }))
            } catch (error) {
                console.log(error)
            }
        }
        getUsersData()
    }, [state.reload])

    const columnaApellidos = [
        {
            field: 'primer_apellido',
            headerText: 'Apellido Paterno',
            width: '40%',
            headerTextAlign: 'Center'
        },
        {
            field: 'segundo_apellido',
            headerText: 'Apellido Materno',
            width: '40%',
            headerTextAlign: 'Center'
        }
    ]


    return (
        <div>
            <GridComponent dataSource={dataUsers} className='table'>
                <ColumnsDirective>
                    <ColumnDirective field='usuario_id' headerText='Id' width='10%' headerTextAlign='Center' />
                    <ColumnDirective field='usuario_login' headerText='Login' width='25%' headerTextAlign='Center' />
                    <ColumnDirective field='nombres' headerText='Nombres' width='50%' headerTextAlign='Center' />
                    <ColumnDirective columns={columnaApellidos} headerText='Apellidos' width='50%' headerTextAlign='Center' />
                    <ColumnDirective field='codigo_estado' headerText='Estado' width='15%' headerTextAlign='Center' />
                    <ColumnDirective field='fecha_actualizacion' headerText='Actualizacion' width='25%' headerTextAlign='Center' />
                </ColumnsDirective>
            </GridComponent>

        </div>
    )
}

export default Users
