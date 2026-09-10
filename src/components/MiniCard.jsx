function MiniCard({ items }) {
    let price = "$" + items.price;
    if (items.price < 0) {
        price = "-$" + String(items.price).slice(1, items.price.length);
    }
    return <>
        <div className="border rounded-xl  border-zinc-300 w-[30%] p-2 bg-zinc-80">
            <div className="text-stone-500">{items.title}</div>
            <div className="text-2xl font-semibold" style={{ color: items.color }}>{price}</div>
        </div>
    </>
}

export default MiniCard;