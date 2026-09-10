function Transaction({ item }) {
  let textcolor = "blue";
  let amount = "+$" + item.amount;
  if (item.status === "Expenses") {
    textcolor = "orange";
    amount = "-$" + item.amount;
  }
  return (
    <>
      <div className="flex justify-between p-4 border border-zinc-100">
        <div>
          <div className="flex gap-2">
            <div className="font-semibold">{item.category}</div>
            {item.note !== "" && (
              <div className="text-zinc-400">•{item.note}</div>
            )}
            <div></div>
          </div>
          <div className="text-zinc-400">{item.date}</div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div className="text-md font-semibold" style={{ color: textcolor }}>
            {amount}
          </div>
          <div className="text-sm hover:scale-120 transition-all cursor-pointer ">
            ❌
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
