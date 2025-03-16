// import React, { useState } from "react";
import {Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({data}) => {
  
  const chartData = {
    labels: data.map((item) => item.id) && data.map((item) => item.referent),
    datasets: [
      {
        label: "RECEITA",
          data: data.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",  // Vermelho
          "rgba(54, 162, 235, 0.8)",  // Azul
          "rgba(255, 206, 86, 0.8)",  // Amarelo
          "rgba(75, 192, 192, 0.8)",  // Verde Água
          "rgba(153, 102, 255, 0.8)", // Roxo
          "rgba(255, 159, 64, 0.8)",  // Laranja
          "rgba(199, 199, 199, 0.8)", // Cinza
          "rgba(83, 102, 255, 0.8)",  // Azul Claro
          "rgba(40, 167, 69, 0.8)",   // Verde
          "rgba(255, 87, 51, 0.8)",   // Vermelho Laranja
          "rgba(23, 162, 184, 0.8)",  // Azul Turquesa
          "rgba(214, 51, 132, 0.8)"   // Rosa
        ],
        hoverOffset: 40,
        borderWidth: 2,
      },
    ],

  };




  return (
    <div className="max-w-lg mt-12 h-full mx-4 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 text-center mb-4">
        Gráfico do Capital /mês
      </h2>
      <Pie data={chartData} />
      <button  className="text-sm/6 mt-18 ml-2 bg-red-500 text-white font-bold  rounded-xl p-2 w-20  " > <a  href="./">Fechar</a>
      </button>
    </div>
  );
};

export default ChartComponent;
