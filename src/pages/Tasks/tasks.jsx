import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/dashboardSlice";

function Tasks () {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dashboard);

  useEffect(() => {
 dispatch(fetchData());

  }, [dispatch]);



 
  
  return (
    <> 
    {/* <button type="button" onClick={ DadosApi()} className="text-sm/6 bg-blue-500 text-white font-bold  rounded-xl p-2 w-20 "> Atualizar </button> */}
    <section className=" px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-tranparent  gap-x-3 gap-y-3 overflow-hidden  "> 
    <strong className="  flex justify-center m-4 border-b-2 border-amber-50 border-2 p-1 rounded-xl ">Lembretes</strong>
    
    {data.map(item =>
      (item.state) ? <div className=" hidden"></div> :
      <div key={item.id}  className="relative   shadow-xl rounded-xl mb-2 isolate flex items-center justify-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-gradient-to-r from-[#fffca8] to-[#ffee00] ">
      
      
      <div className="flex  flex-wrap items-center gap-x-6">
      <p className="text-sm/4 text-black tracking-wide "> 
      <br />
      {item.name} está atrasado! Valor R$ {item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
      <a
      href="#"
      className="flex-none rounded-full bg-gray-900 px-2.5 py-.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
      conferir...  
      
      </a>
      </div>
      <div className="flex flex-1  justify-end">
      
      <button type="button"  className="p-3 m-1focus-visible:outline-offset-[-4px]">
      
      <svg className="h-8 w-8 flex-none bg-yellow-50 rounded-xl  text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
      </svg>
      </button>
      </div>
      
      
      </div>
      
      
    )}
    </section>
    </>
  )
  
}

export default Tasks