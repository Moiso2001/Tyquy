import {useState} from 'react'

/* Icons */
import {AiOutlinePlusCircle, AiOutlineCloseCircle} from "react-icons/ai"

export default function First() {
  const [names,setNames] = useState([{id: 0, name: ''}])

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const updatedNames = names.map((item) => {
      if (item.id === id) {
        return { id: item.id, name: e.target.value };
      }
      return item;
    });

    setNames(updatedNames);
  }

  function deleteName(id: number){
    const updatedNames = names.filter(name => name.id !== id)

    setNames(updatedNames)
  }

  return (

      <div>
        <div>

        </div>

        <div>
          <div>
            <span>Nombre completo (Dueñ@s)</span>
            {names.map(e => 
              <div key={e.id}>
                <input value={e.name} onChange={event => handleOnChange(event, e.id)}/>

                {e.id > 0
                    ?<div onClick={() => deleteName(e.id)}>
                        <AiOutlineCloseCircle/>
                     </div>
                    :<div onClick={() => setNames([...names, {id: names.length, name: ''}])}>
                        <AiOutlinePlusCircle/>
                     </div>
                }
               
              </div>
            )}
          </div>
        </div>
      </div>
  )
}
