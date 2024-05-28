import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContexts"

function Header() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let headerComponent

    if(usuario.token !== "") {
        headerComponent = (
    
     <div className='w-full bg-indigo-900 text-white flex justify-center py-3'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-5'>
                <Link to='/postagens' className='hover:cursor-pointer hover:underline'>Postagens</Link>
                <Link to='/temas' className='hover: cursor-pointer hover:underline'>Temas</Link>
                <Link to='/cadastroTema' className='hover:cursor-pointer hover:underline'>Cadastrar Tema</Link>
                <Link to='/perfil' className='hover:cursor-pointer hover:underline'>Perfil</Link>
                <Link to='' onClick={logout} className='hover:cursor-pointer hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    )
}
return(
    <>
    {headerComponent}
    </>
  )
}

export default Header;