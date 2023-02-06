import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className='all'>
       
      <div className = 'FooterAll'>
        {/* <ul id='cocial_icon'>
          <li><a href='#'><FacebookIcon className='Facebook'/></a></li>
          <li><a href='#'><PhoneIcon/></a></li>
          <li><a href='#'> <MailIcon/></a></li>
          <li><a href='#'><WhatsAppIcon/></a></li>
        </ul> */}

        <ul className="menu">
         <li><a id='menu1' href=''>שירותים שלנו</a></li>
         <li><a id='menu2'>פרטים</a></li>
         {/* <li><a id='menu3'>Contact</a></li>
         <li><a id='menu4'>Home</a></li> */}

         </ul>
         <p className='p2'>
          @this is a web page on 9/2022
         </p>
        
      </div>

    </div>
  )
}

export default Footer
