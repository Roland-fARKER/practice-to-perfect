import React from 'react';
import "./LoginStyle.css";
import imagenes from '../img/imagenes';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#6CB14F',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6CB14F',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#6CB14F',
      },
      '&:hover fieldset': {
        borderColor: '#6CB14F',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6CB14F',
      },
      '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        color: "#6CB14F"
      },

    },
  });


function Login() {
  return (
    <div className='ContLog'>
        <h1>Practice to perfect.</h1>
        <div className='Log'>
            <h1>
                Bienvenido.
            </h1>
            <img src={imagenes[0].practice_logo} className="LogLogo" alt=""/>
            <CssTextField label="Usuario" id="standard-basic" className="input"  variant='standard'/>
            <CssTextField label="Contraseña" type="password" id="standard-basic" className="input" variant='standard'/>
            <div className="Iniciar">
                    <Link to={"/"}>
                      <button className="BotonInicio">
                          Iniciar
                      </button>
                    </Link>     
                    <div className="blok">
                        <p className="Parrafo">Olvido su contraseña? </p>
                        <h2 className="Titulo">Aun no tienes cuenta? registrate</h2>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Login