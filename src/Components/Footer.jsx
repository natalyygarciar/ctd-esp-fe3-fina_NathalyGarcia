import React, { useContext } from 'react'
import { ContextGlobal } from "./utils/global.context";


const Footer = () => {
  const {data, setData}  = useContext(ContextGlobal)

  return (
    <footer>
        <p>Powered by</p>
        <img src='.\public\images\DH.png'  alt='DH-logo' />
        <div>
          <img className={data.icons} src='../../images/ico-facebook.png' alt='facebook-logo' />
          <img className={data.icons} src='../../images/ico-instagram.png' alt='instagram-logo' />
          <img className={data.icons} src='../../images/ico-whatsapp.png' alt='whatsapp-logo' />
          <img className={data.icons} src='../../images/ico-tiktok.png' alt='tiktok-logo' />
          </div>
    </footer>
  )
}

export default Footer
