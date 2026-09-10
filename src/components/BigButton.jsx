function BigButton({ name, handleToChangeStatus,bgcolor,color }) {
    
    return <>
        <div className="w-[49%] rounded-lg text-center py-2 text-stone-600 cursor-pointer" onClick={handleToChangeStatus} style={{ backgroundColor: bgcolor, color: color}}>{name}</div>
    </>
}

export default BigButton;