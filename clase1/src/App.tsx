import { useState } from 'react'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>Componente principal que manejará la lógica de la aplicación 
      y la gestión del estado global (o al menos el estado de los datos
       principales).</p>
    </>
  )
}

/*
Se utilizará una API pública a elección, específicamente el endpoint para obtener una lista de elementos.
En el componente correspondiente, utilizar el Hook useEffect para realizar la llamada a la API solo al montar el componente.
Opcional y para investigar ⇒ Manejar el estado de la carga de datos (por ejemplo, mostrar un mensaje de "Cargando..." mientras se obtienen los datos).
*/

/*
Utilizar el Hook useState para manejar al menos los siguientes estados dentro de la aplicación:

data: Almacenar la lista de Pokémon obtenida de la API. Inicialmente un array vacío.
(opcional) loading: Un booleano para indicar si la solicitud a la API está en curso. (En caso de utilizarse la opción de manejo de carga de datos)
Opción para PROs!!!

Agregar un searchTerm (en App.jsx o Buscador.jsx): La cadena de texto ingresada por el usuario en el componente Buscador. (opcional, si se implementa la funcionalidad de búsqueda/filtro)
5. Funcionalidad de Búsqueda/Filtro (Opcional)
Implementar una función que filtre los elementos mostrados en ListaItems.jsx basándose en el valor del estado searchTerm.
El componente Buscador.jsx debe actualizar el estado searchTerm en su componente padre (App.jsx) utilizando una función pasada como prop.
El filtro debe ser sensible a mayúsculas/minúsculas (opcionalmente, convertir ambos a minúsculas antes de la comparación).
6. Presentación
Dar un estilo básico a la aplicación para que sea visualmente presentable utilizando CSS plano, pueden utilizar Tailwind si ya lo conocen.
*/

export default App
