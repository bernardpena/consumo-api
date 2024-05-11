import React, { useState, useEffect } from 'react'

const Buscador = () => {
    //setear los Hooks useState
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    //funcion para traer los datos
    const URL = 'https://midas.minsal.cl/farmacia_v2/WS/getLocales.php'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json();
        // console.log(data);
        setUsers(data);
    }

    //método de Filtrado
    const results = !search ? users : users.filter((dato) => dato.comuna_nombre.toLowerCase().includes(search.toLocaleLowerCase()))

    //metodo de ordenado
    users.sort(function(a,b){
        return a.comuna_nombre.localeCompare(b.comuna_nombre);
    })

    //Funcion Búsqueda
    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e)
    }

    useEffect(() => {
        showData()
    }, [])

    //renderizamos la vistas
    return (
        <div>
            <input type="text"
                placeholder='Búsqueda por Ciudad'
                className='form-control'
                value={search}
                onChange={searcher} />

            <table className='table table-striped table-hover mt-5 shadow-lg' >
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>Farmacia</th>
                        <th>Comuna</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Hora Apertura</th>
                        <th>Hora Cierra</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {users.map((user) => ( */}
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
                </tbody>
            </table>
        </div>
    )
}

export default Buscador
