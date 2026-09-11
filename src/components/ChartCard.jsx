import Chart from "./Chart";

function ChartCard({ piedata }) {
  return (
    <>
      <div className="w-[75%] max-w-212 m-auto mt-10 border rounded-xl border-zinc-300 p-5">
        {piedata.length ? (
          <div>
            Spending By Category<Chart piedata={piedata}></Chart>
          </div>
        ) : (
          "No expenses to chart yet"
        )}
      </div>
    </>
  );
}

export default ChartCard;
