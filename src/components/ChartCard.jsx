import Chart from "./Chart";
import BigButton from "./BigButton";
import { useState } from "react";

function ChartCard({ expensepiedata, incomepiedata }) {
  let type = ["Expenses", "Income"];
  let expenseColor = [
    "orange",
    "rgba(0,0,0,0.1)",
    "white",
    "rgba(0, 0, 0, 0.6)",
  ];
  let [status, setStatus] = useState("Expenses Chart");
  let incomeColor = ["rgba(0,0,0,0.1)", "blue", "rgba(0, 0, 0, 0.6)", "white"];
  const handleToChangeStatus = (e) => {
    if (status != e.target.textContent) {
      setStatus(e.target.textContent);
    }
  };
  return (
    <>
      <div className="w-[75%] max-w-212 m-auto mt-10 border rounded-xl border-zinc-300 p-5">
        <div className="flex gap-4">
          {status === "Expenses Chart"
            ? type.map((item, index) => {
                return (
                  <BigButton
                    name={`${item} Chart`}
                    bgcolor={expenseColor[index]}
                    color={expenseColor[index + 2]}
                    handleToChangeStatus={handleToChangeStatus}
                  ></BigButton>
                );
              })
            : type.map((item, index) => {
                return (
                  <BigButton
                    name={`${item} Chart`}
                    bgcolor={incomeColor[index]}
                    color={incomeColor[index + 2]}
                    handleToChangeStatus={handleToChangeStatus}
                  ></BigButton>
                );
              })}
        </div>
        <div className="mt-3">
          {status === "Expenses Chart" ? (
            expensepiedata.length ? (
              <Chart piedata={expensepiedata}></Chart>
            ) : (
              "No expenses to chart yet"
            )
          ) : incomepiedata.length ? (
            <Chart piedata={incomepiedata}></Chart>
          ) : (
            "No income to chart yet"
          )}
        </div>
      </div>
    </>
  );
}

export default ChartCard;
