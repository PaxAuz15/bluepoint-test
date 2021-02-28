import React, {useEffect, useState} from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective} from '@syncfusion/ej2-react-grids';
import { getUsers } from "../services/users.services"

const Users = () => {

    const [state, setState] = useState({
        reload: false,
        loading: false
    })
    const [dataUsers, setDataUsers] = useState([])
   

    useEffect(() => {
        setState(old => ({...old, loading: true }))
        const getUsersData = async () => {
            try {
                const users = await getUsers()
                setDataUsers(users.data)
                setState(old => ({...old, loading: false }))
            } catch (error) {
                console.log(error) 
            }
        }
        getUsersData()
    }, [state.reload])

    // const onChangeInput = (e) => {
    //     console.log(e.target.vulue)
    // }

    console.log(dataUsers)

    return (
        <div>
            <GridComponent dataSource={dataUsers}>
                <ColumnsDirective>
                    <ColumnDirective field='usuario_id' headerText='Id' width='25%'/>
                    <ColumnDirective field='nombres' headerText='Nombres' width='75%'/>
                    <ColumnDirective field='primer_apellido' headerText='Apellido 1' width='75%'/>
                    <ColumnDirective field='segundo_apellido' headerText='Apellido 2' width='75%'/>
                    <ColumnDirective field='codigo_estado' headerText='Estado' width='25%'/>
                    <ColumnDirective field='fecha_actualizacion' headerText='Actualizacion' width='50%'/>
                </ColumnsDirective>
            </GridComponent>

        </div>
    )
}

export default Users
