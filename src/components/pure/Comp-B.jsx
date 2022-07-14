import React , { useState } from 'react'
import PropTypes from 'prop-types'
function CompB(props) {
  /**
* 
* Le otorgo el valor "conectado" o "desconectado" al parametro conectado del objeto recibido por props*/
    const [Enlinea, setstate] = useState( props.conectado === true ? 'Contacto en linea' : 'Contacto no disponible');
/**
* 
* Funcion para Conectar al usuario desde un boton*/
    const conectar= () => {
    setstate( 'Contacto en linea' )
    }
/**
 * Funcion para volver a desconectar al usuario
 */
    const Desconectar= () => {
    setstate( 'Contacto no disponible' )
    }
  return (
    /**
 * Devuelvo el Html con los valores recibidos por props
 *     con la posiblidad de cambiar el estado de conexion.
 */
    <div className='caja' style={{width:'600px',backgroundColor:'blue',padding:'40px', borderRadius:'40px',fontWeight:'bold'}}>
            <h2>Contacto</h2> 
            <hr/>
            <p>Nombre: {props.nombre}</p>
            <p>Apellido: {props.apellido}</p>
            <p>Email: {props.email}</p>
            <p>Estado de conexion: { Enlinea }</p>
            <hr/>
            <button onClick={conectar} style={{ width:'200px',margin:'10px',padding:'10px'}} >Conectar</button>
            <button onClick={Desconectar} style={{ width:'200px', margin:'10px',padding:'10px'}} >Desconectar</button>
    </div>
  )
}
    /**
 * Verifico que los datos recibidos cumplan con los requerimientos de Proptypes.
 */
CompB.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};

export default CompB
