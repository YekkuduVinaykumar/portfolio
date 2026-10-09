const Events = () =>{
    let count=0
    const handleInc=()=>{
        count++;
        console.log(count)
    }
    const handleDec=()=>{
        count--;
        console.log(count) 
    }
    return(
        <div>Events Components
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <h1>{count}</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}className="input"/>
            <button>Submit</button>
        </form>
        </div>
    )
}
export default Events 