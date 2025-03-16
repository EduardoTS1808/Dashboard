export const fetchDashboardData = async () => {
    try {
      const response = await fetch("http://localhost:3001/dashboard");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  };
  