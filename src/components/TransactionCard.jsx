import Transaction from "./Transaction";

function TransactionCard({ data }) {
  return (
    <>
      <div className="w-[75%] max-w-212 m-auto my-4 border rounded-lg border-zinc-300 overflow-hidden">
        {data.map((item) => {
          return <Transaction status={status} item={item}></Transaction>;
        })}
      </div>
    </>
  );
}

export default TransactionCard;
