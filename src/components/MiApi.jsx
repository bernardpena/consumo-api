import React, { useState, useEffect } from 'react'
import Buscador from './Buscador'

const MiApi = () => {
    //setear los Hooks useState
    const [users, setUsers] = useState([]);


    //función para traer los datos
    const URL = 'https://midas.minsal.cl/farmacia_v2/WS/getLocales.php'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json();
        // console.log(data);
        setUsers(data);
    }

    useEffect(() => {
        showData()
    }, [])

    //método de ordenado
    users.sort(function (a, b) {
        return a.comuna_nombre.localeCompare(b.comuna_nombre);
    })

    //Función Búsqueda
    //     setSearch(e.target.value);
    // const searcher = (e) => {
    //     console.log(e)
    // }

    // //método de Filtrado
    // const results = !search ? users : users.filter((dato) => dato.comuna_nombre.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        //renderizamos la vistas
        <div>

            <div className='buscador'>
                <Buscador />
            </div>
            <div className='table-responsive'>
                <table className='table table-fixed table-striped table-hover mt-5 shadow-lg' >
                    <thead>
                        {/* <tr className='bg-curso text-white'>
                            <th>Farmacia</th>
                            <th>Comuna</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Hora Apertura</th>
                            <th>Hora Cierra</th>
                        </tr> */}
                    </thead>
                    {/* <tbody>
                    
                    {results.map((user) => (
                        <tr key={user.local_id}>
                        <td>{user.local_nombre}</td>
                        <td>{user.comuna_nombre}</td>
                        <td>{user.local_direccion}</td>
                        <td>{user.local_telefono}</td>
                        <td>{user.funcionamiento_hora_apertura}</td>
                        <td>{user.funcionamiento_hora_cierre}</td>
                        </tr>
                    ))}
                </tbody> */}
                </table>
            </div>


        </div>
    )
}

export default MiApi
