
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='rounded border-solid border-2 py-2 px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;