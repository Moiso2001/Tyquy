import {useState} from 'react'

/* Icons */
import {AiOutlinePlusCircle, AiOutlineCloseCircle, AiOutlineHome} from "react-icons/ai";
import { Link } from 'react-router-dom';

type FirstProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    form: {
      nombre: {
          id: number;
          name: string;
      }[];
      celular: string;
      correo: string;
      direccion: string;
  }
}

export default function First({setStep, form}: FirstProps) {
  const [formInfo,setFormInfo] = useState(form)

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const updatedNames = formInfo.nombre.map((item) => {
      if (item.id === id) {
        return { id: item.id, name: e.target.value };
      }
      return item;
    });

    setFormInfo(prevForm => ({...prevForm, nombre: updatedNames}));
  }

  function deleteName(id: number){
    const updatedNames = formInfo.nombre.filter(name => name.id !== id)

    setFormInfo(prevForm => ({...prevForm, nombre: updatedNames}));
  }


  return (
 
      <div>
        <div>

        </div>

        <div>
          <div>
            <span>Nombre completo (Dueñ@s)</span>
            {formInfo.nombre.map(e => 
              <div key={e.id}>
                <input value={e.name} onChange={event => handleOnChange(event, e.id)}/>

                {e.id > 0
                    ?<div onClick={() => deleteName(e.id)}>
                        <AiOutlineCloseCircle/>
                     </div>
                    :<div onClick={() => setFormInfo(prevForm => ({...prevForm, nombre: [...prevForm.nombre, {id: formInfo.nombre.length, name: ''}]}))}>
                        <AiOutlinePlusCircle/>
                     </div>
                }
               
              </div>
            )}
          </div>

          <div>
            <div>
                <span>Celular</span>
                <input/>
            </div>

            <div>
                <span>Correo</span>
                <input/>
            </div>
          </div>

          <div>
            <span>Direccion</span>
            <input/>
          </div>

          <div>
            <Link 
              style={{color: "black"}} 
              to='/'
            >
              <AiOutlineHome/>
            </Link>
            <span onClick={() => setStep(step => step + 1)}>Continuar</span>
          </div>
        </div>
      </div>
  )
}
