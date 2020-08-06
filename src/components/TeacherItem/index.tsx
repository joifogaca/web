import React from 'react';
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return (<article className="teacher-item">
    <header>
        <img src="https://avatars0.githubusercontent.com/u/5731790?s=460&u=eab3efe6b27ef8be158d2e5e07b6d657706edcbe&v=4" alt="Felipe Felix" />
        <div>
            <strong>Felipe Felix</strong>
            <span>Designer UX e UI</span>
        </div>
    </header>
    <p>
        Entusiasta das melhores tecnologias do mercado.
        <br/><br/>
        Apaixonado por cores e coisas que brilham e piscam.
       </p>
       <footer>
           <p>
           Preço/hora
           <strong> R$ 80,00 </strong>
           </p>
           <button type="button">
               <img src={whatsappIcon} alt="Entrar em contato"/>
           Entrar em contato
           </button>
       </footer>
</article>);
}

export default TeacherItem;