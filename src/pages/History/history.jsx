import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/dashboardSlice";


 import { useFetch } from "../../hooks/useFetch";
function Hist() {
  const dados = useFetch(fetchData);
  
  const dispatch = useDispatch();
  dados = useSelector((state) => state.dashboard);




const valorTotal = data.reduce((acc, item) => acc + item.value, 0);
const valorTotalConvertido = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
    <section className=' mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-2 gap-y-2   bg-tranparent p-2 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3' >

      <div>
       
      <strong className="  flex justify-center m-4 border-b-2 border-amber-50 border-2 p-1 rounded-xl ">Motiventações</strong>
    </div>
     {/* TABELA  DINÃMICA*/}

     <table  className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 bg-white" >
      
        <thead>
    <tr>
      <th className=" border border-gray-300 dark:border-gray-600" >Descrições</th>
      <th  className="border border-gray-300 dark:border-gray-600" >Datas</th>
      <th className=" border border-gray-300 dark:border-gray-600" >Valores</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => 
    
    <tr className="b" key={item.id}>
      <td className="border border-gray-300 dark:border-gray-700" >{item.description}.</td>
      <td className="border border-gray-300 dark:border-gray-700" >{item.referent} </td>
      <td className="border border-gray-300 dark:border-gray-700" >{item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    </tr>
    )}
    <tr>
    </tr>
  </tbody>
  <tfoot>
    <tr className="border-2">
      <td className="border border-gray-300 dark:border-gray-600">Total</td>
      <td className="border border-gray-300 dark:border-gray-600">{valorTotalConvertido}</td>
    </tr>
    <button  className="text-sm/6 bg-red-500 text-white font-bold  rounded-xl p-2 w-20  " > <a  href="./">Fechar</a>
    </button>
  </tfoot>
        
     </table>
      
    
     
    </section>
    </>
  )
}

export default Hist