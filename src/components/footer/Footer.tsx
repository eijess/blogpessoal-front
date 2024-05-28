import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';


function Footer() {

  const { usuario, handleLogout} = useContext(AuthContext)
  
  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
 
  
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl'>Blog pessoal Jessica Ignácio | Copyright &copy; </p>
            <p className='text-lg'>Acesse as minhas redes sociais</p>
            <div className='flex gap-2'>
                <a href="https://www.linkedin.com/in/jessicaignacio/">
                  <LinkedinLogo size={32} color="#ffffff" />
                </a>
                <a href="https://github.com/eijess">
                  <GithubLogo size={32} color="#ffffff" />
                </a>
            </div>
          </div>
        </div>
      </>
      )
   }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer;