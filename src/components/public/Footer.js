import React from 'react';
import {Link} from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className="p-h">
        <ul>
            <li><Link> سیاست حفظ حریم خصوصی</Link></li>
            <li><Link>شرایط و ضوابط</Link></li>
            <li>کپی رایت @ 2020 پرسونالوژی. تمام حقوق محفوظ است</li>
        </ul>
    </footer>
  )
}

export default Footer;