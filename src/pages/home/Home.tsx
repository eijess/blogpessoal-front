import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home(){
    return(
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja Bem-Vindo!</h2>
                        <p className="text-xl">Expresse aqui os seus pensamentos e opiniões</p>

                        <div className="flex justify-around gap-4">
                            <button className="text-white border-white hover:bg-white hover:text-indigo-900">
                                <ModalPostagem />
                            </button>
                        </div>

                    </div>

                    <div className="flex justify-center items-center">
                        <img src="https://i.imgur.com/VpwApCU.png" 
                        alt="Imagem da Página Home" 
                        className="h-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}
export default Home;