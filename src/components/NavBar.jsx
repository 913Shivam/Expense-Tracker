function NavBar() {
  return (
    <>
      <div className="sticky top-0 bg-zinc-100 border-b border-gray-500 h-15 flex items-center justify-between px-15">
        <div className="font-bold text-xl text-green-500">Budget Tracker</div>
        <div className="bg-zinc-700 p-1 px-2 rounded-lg hover:bg-stone-600 text-white cursor-pointer transition-all">Github</div>
      </div>
    </>
  );
}

export default NavBar;
 