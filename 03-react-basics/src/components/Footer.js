import React from 'react'

//aplicando destructuring para jalar de los props

const Footer = ({fecha}) => (
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>
    );

export default Footer;