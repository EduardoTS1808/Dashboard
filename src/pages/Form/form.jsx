import React,{useState, useEffect} from 'react'
import { data } from 'autoprefixer'



function Form(props) {
  const [nextID, setNextID] = useState(1);
    const [tarefas, setTarefas] = useState({  
    referente: '',
    categoria: '',
    data: '',
    valor: '',
    tipo: '',
    id: nextID  
    })

    const handleOnChange = (event)=>{
      changerField(event.target.name, event.target.value)
      
   }
   const changerField = (field, value)=>{
    setTarefas( (prev) => ({
      ...prev, [field]: value}))
    
    
  }
  const  handleRadioChange = (event ) => {
     setTarefas((prevState)=>({ ...prevState, categoria: event.target.value}))
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault()
  const camposVazios = Object.values(tarefas).some((campo) => campo.trim() === "" || campo === isNaN);

  if (camposVazios) {
    alert("Preencha todos os campos");
    return;
  }
  console.log(tarefas);
  setNextID((nextID) => nextID + 1);
 
}
useEffect(()=>{},[tarefas])





  return (


    <>

    <form onSubmit={handleSubmit} className=' mx-auto  grid  m-3 grid-cols-1 gap-x-2 gap-y-1  p-3 sm:mt-86 sm:pt-16 lg:mx-0 lg:grid-cols-3  bg-white rounded-xl shadow-xl'>

   
     
    <div className="border-b border-gray-900/10  pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">NOVOS MOVIMENTOS E TAREFAS</h2>
      <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label for="first-name" className="block text-sm/6  font-medium text-gray-900">Referente</label>
          <div className="mt-2">
            <input type="text" name="referencia" onChange={handleOnChange}  id="referente"  placeholder="refere-se a quê..." className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>

     

       

       
        <div onChange={handleRadioChange} className="sm:col-span-3">
        <div  className="container">
             <label >Compromisso</label>
           {/* <h5>Categoria </h5> */}
          <div className="opction">
             <label >Compromisso</label>
              <input 
              type="radio"
               id="01"
               name='categoria'
                value="compromisso"
                />
         </div>
          <div className="opction">
             <label >Lazer</label>
            <input 
            type="radio"
             id="02"
             name='categoria'
               value="lazer" 
              />
         </div>
          <div className="opction">
             <label >Outros</label>
              <input 
              type="radio"
               id="03"
               name='categoria'
                value="outros" 
                />
         </div>
        </div>
        
        
     
        </div>

        <div className="col-span-full">
          <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Tipo de transferência</label>
          <div className="mt-2">
            <input type="text" name="tipo" onChange={handleOnChange} id="street-address" placeholder="debito, credito, pix, dinheiro..." className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label for="city" className="block text-sm/6 font-medium text-gray-900">Data</label>
          <div className="mt-2">
            <input type="date" name="data"  onChange={handleOnChange} id="city" placeholder="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label for="region" className="block text-sm/6 font-medium text-gray-900">Valor</label>
          <div className="mt-2">
            <input type="number" name="valor" onChange={handleOnChange} id="region" placeholder="Digite o valor" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>

     
      </div>
    </div>

 
  <div className="mt-6 flex items-center justify-between gap-x-6">
    <button  className="text-sm/6 bg-red-500 text-white font-bold  rounded-xl p-2 w-20  " > <a  href="./">Fechar</a>
    </button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Adicionar</button>
  </div>
  
</form>
    </>
  )
}

export default Form