import Transaction from "./Transaction";

function TransactionCard({ data ,deleteTransaction}) {
  return (
    <>
      <div className="w-[75%] max-w-212 m-auto my-4 border rounded-lg border-zinc-300 overflow-hidden">
        {data.length ? ( 
          data.map((item,index) => {
            return <Transaction item={item} index={index}deleteTransaction={deleteTransaction}></Transaction>;
          })
        ) : (
          <div className="flex justify-between p-4 border border-zinc-100">
            No transacctions yet. Add your First one Above.
          </div>
        )}
      </div>
    </>
  );
}

export default TransactionCard;
