import carteira from '../../assets/portfolio-suitcase-svgrepo-com.svg'
import calc from '../../assets/abacus-svgrepo-com.svg'
import dinheiro from '../../assets/money-svgrepo-com.svg'
import dadosBase from '../Tasks/Dados'

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchDataGlobal } from "../../store/globalSlice";

function Main() {
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.dashboard);

  // useEffect(() => {
  //   dispatch(fetchDataGlobal()); // 🚀 Dispara a ação para buscar dados da API
  // }, [dispatch]);

  
  const funcSomaTodosValores = () => {
    let total = 0
    dadosBase.map(item => total += parseFloat(item.valor))
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const Receita = funcSomaTodosValores();
  const funcTotalDispesas = () => {
    let totalDispesas = 0
    dadosBase.map(item => {
      if (item.tipo === "Fixa") {
        totalDispesas += parseFloat(item.valor)
        
      }
    })
    return totalDispesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const Dispesas = funcTotalDispesas();
  
  const funcTotalCaixa = () => {
    let totalCaixa = 0
    dadosBase.map(item => {
      if (item.tipo === "Variável") {
        totalCaixa += parseFloat(item.valor)
      }
    })
    return totalCaixa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const Caixa = funcTotalCaixa();
  
  
  
  
  return (
    <>
    <div>
    
    
    <div >
    <div className=" rounded-3xl rounded-t-3xl bg-white/60 border-b-10 border-green-300 p-3 ring-1 ring-gray-900/10 mx-8 sm:mx-84sm:rounded-b-none sm:p-10 mt-18"> 
    <img src={carteira} className="max-w-15 bg-green-300 p-4 rounded-xl" alt="icon-svg-carteira" />
    <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Receita</h3>
    <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
    <span className=" flex text-3xl font-semibold w-auto text-gray-900">{Receita} </span>
    <span className="text-base text-gray-500"> em março</span>
    </p>
    <p className="mt-3 text-base/4 text-gray-600">exibir um valor em % da diferença em comparação ao mes passado ex: aumento de 15%</p>
    </div>
    </div>
    
    <div >
    <div className="rounded-3xl rounded-t-3xl bg-white/60 border-b-10 border-yellow-300 p-3 ring-1 ring-gray-900/10 mx-8 sm:mx-84sm:rounded-b-none sm:p-10 mt-4 ">
    <img src={dinheiro} className="max-w-15 bg-yellow-300 p-4 rounded-xl" alt="icon-svg-calculadora" />
    <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Caixa</h3>
    <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
    <span className="text-3xl font-semibold tracking-tight text-gray-900">{Caixa}</span>
    <span className="text-base text-gray-500"> em março</span>
    </p>
    <p className="mt-3 text-base/4 text-gray-600">exibir um valor em % da diferença em comparação ao mes passado ex: aumento de 15%</p>
    </div>
    
    
    </div>
    <div>
    <div className=" rounded-3xl rounded-t-3xl bg-white/60 border-b-10 border-red-300 p-3 ring-1 ring-gray-900/10 mx-8 sm:mx-84sm:rounded-b-none sm:p-10 mt-4">
    <img src={calc} className="max-w-15 bg-red-300 p-4 rounded-xl" alt="icon-svg-moner" />
    <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Despesas</h3>
    <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
    <span className="text-3xl font-semibold tracking-tight text-gray-900">{Dispesas}</span>
    <span className="text-base text-gray-500"> em março</span>
    </p>
    <p className="mt-3 text-base/4 text-gray-600">exibir um valor em % da diferença em comparação ao mes passado ex: aumento de 15%</p>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Main