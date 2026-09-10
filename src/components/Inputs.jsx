function Inputs({ items , amountRef, categoryRef, noteRef, getValue}) {
  return (
    <>
      <form onSubmit={getValue} className="mt-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 w-[49%]">
            <label className="text-stone-500 font-semibold" htmlFor="amount">
              Amount
            </label>
            <input
              className="border border-stone-300 rounded-lg p-2"
              type="number"
              name="amount"
              id="amount"
              placeholder="0.00"
              ref={amountRef}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-[49%]">
            <label className="text-stone-500 font-semibold" htmlFor="category">
              Category
            </label>
            <select
              className="border border-stone-300 rounded-lg p-2"
              name="category"
              id="category"
              ref={categoryRef}
            >
              {items.map((item) => {
                return <option value={`${item}`}>{item}</option>
              })}
              {/* <option value="Food" selected>
                Food
              </option>
              <option value="Others">Others</option> */}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-stone-500 font-semibold" htmlFor="note">
            Note (optional)
          </label>
          <input
            className="border border-stone-300 rounded-lg p-2"
            type="text"
            name="note"
            id="note"
            placeholder="Groceries, rent, etc."
            ref={noteRef}
          />
        </div>
        <input
          className="text-white bg-black p-2 rounded-lg cursor-pointer hover:bg-stone-800 hover:scale-101 transition-all"
          type="submit"
          value="Add transaction"
        />
      </form>
    </>
  );
}

export default Inputs;
