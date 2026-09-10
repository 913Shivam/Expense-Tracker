import MiniCard from "./MiniCard";
import MidCard from "./MidCard";
import TransactionCard from "./TransactionCard";
import { useRef, useState } from "react";

function Card() {
  let [status, setStatus] = useState("Expenses");
  const handleToChangeStatus = (e) => {
    if (status != e.target.textContent) {
      setStatus(e.target.textContent);
    }
  };
  const initialDetail = JSON.parse(localStorage.getItem("detail")) || [
    {
      title: "Total Income",
      price: 0,
      color: "green",
    },
    {
      title: "Total Expenses",
      price: 0,
      color: "red",
    },
    {
      title: "Balance",
      price: 0,
      color: "green",
    },
  ];
  const initialData = JSON.parse(localStorage.getItem("data")) || [];
  let [detail, setDetail] = useState(initialDetail);
  let amountRef = useRef();
  let categoryRef = useRef();
  let noteRef = useRef();
  let [data, setData] = useState(initialData);

  const getValue = (e) => {
    e.preventDefault();
    let currentDetail = [...detail];
    const amount = Number(amountRef.current.value);
    if (status === "Expenses") {
      currentDetail[1].price = detail[1].price + amount;
    } else {
      currentDetail[0].price = detail[0].price + amount;
    }
    currentDetail[2].price = currentDetail[0].price - currentDetail[1].price;
    setDetail(currentDetail);
    const now = new Date();
    const monthName = now
      .toLocaleDateString("en-Us", { month: "long" })
      .slice(0, 3);
    const day = now.getDate();
    let newData = {
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      date: `${day} ${monthName}`,
      status: status,
      note: noteRef.current.value,
    };
    let updatedData = [newData, ...data];
    setData(updatedData);
    localStorage.setItem("detail", JSON.stringify(currentDetail));
    localStorage.setItem("data", JSON.stringify(updatedData));
    e.target.reset();
  };

  return (
    <>
      <div className="w-[75%] max-w-212 m-auto mt-10 border rounded-xl border-zinc-300 p-5">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <p className="mt-2">
          Track your expenses, manage your money, reach your goals.
        </p>
        <div className="flex items-center justify-between m-auto my-5">
          {detail.map((items) => {
            return <MiniCard items={items}></MiniCard>;
          })}
        </div>
        <MidCard
          getValue={getValue}
          amountRef={amountRef}
          categoryRef={categoryRef}
          noteRef={noteRef}
          status={status}
          handleToChangeStatus={handleToChangeStatus}
        ></MidCard>
      </div>
      <TransactionCard status={status} data={data}></TransactionCard>
    </>
  );
}

export default Card;
