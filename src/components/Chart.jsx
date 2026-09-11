import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function Chart({ piedata }) {
  // 3. Define your chart data structure
  const data = {
    labels: piedata.map((item) => item.category),
    datasets: [
      {
        label: "amount",
        data: piedata.map((item) => item.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
      },
    ],
  };
  // borderColor: [
  //   'rgba(255, 99, 132, 1)',
  //   'rgba(54, 162, 235, 1)',
  //   'rgba(255, 206, 86, 1)',
  //   'rgba(75, 192, 192, 1)',
  // ],
  // borderWidth: 1,

  // 4. Configure optional layout settings
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        // text: 'Favorite Colors Survey',
      },
    },
  };

  return (
    <>
      <div style={{ width: "400px", margin: "10px auto" }}>
        <Pie data={data} options={options} />
      </div>
    </>
  );
}

export default Chart;
