import BigButton from "./BigButton";
import Inputs from "./Inputs";

function MidCard({amountRef,categoryRef,noteRef,getValue,status,handleToChangeStatus}) {
  let expenseColor = ["orange", "rgba(0,0,0,0.1)", "white", "rgba(0, 0, 0, 0.6)"];
  let incomeColor = ["rgba(0,0,0,0.1)", "blue", "rgba(0, 0, 0, 0.6)","white"];
  let type = ["Expenses", "Income"];
  let expenseItems = [
    "Food",
    "Rent",
    "Transport",
    "Shopping",
    "Bills",
    "Other",
  ];
  let incomeItems = ["Salary", "Freelance", "Gift", "Other"];

  return (
    <>
      <div className="border rounded-xl  border-zinc-300 p-5 bg-zinc-50">
        <div className="flex justify-between">
          {status === "Expenses"
            ? type.map((item, index) => {
                return (
                  <BigButton
                    name={item}
                    handleToChangeStatus={handleToChangeStatus}
                    bgcolor={expenseColor[index]}
                    color={expenseColor[index + 2]}
                  ></BigButton>
                );
              })
            : type.map((item, index) => {
                return (
                  <BigButton
                    name={item}
                    handleToChangeStatus={handleToChangeStatus}
                    bgcolor={incomeColor[index]}
                    color={incomeColor[index + 2]}
                  ></BigButton>
                );
              })}
        </div>
        {status === "Expenses" ? (
          <Inputs
            items={expenseItems}
            amountRef={amountRef}
            categoryRef={categoryRef}
            noteRef={noteRef}
            getValue={getValue}
          ></Inputs>
        ) : (
          <Inputs
            items={incomeItems}
            amountRef={amountRef}
            categoryRef={categoryRef}
            noteRef={noteRef}
            getValue={getValue}
          ></Inputs>
        )}
      </div>
    </>
  );
}

export default MidCard;
