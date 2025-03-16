import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/dashboardSlice";
import ChartComponent from "../Chart/chart";

 const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchData()); // 🚀 Dispara a ação para buscar dados da API
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Carregando dados...</p>}
      {error && <p className="text-red-500">Erro: {error}</p>}
      
      {!loading && !error && data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChartComponent data={data} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
