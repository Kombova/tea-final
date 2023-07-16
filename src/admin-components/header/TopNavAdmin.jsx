const TopNavAdmin = () =>{
    let topNavArr = ['Добавить товар','Управление магазином', 'Заказы'];
    return(
        <nav>
            <ul className="flex justify-center items-center gap-2 bg-[red]">
                {topNavArr.map((item)=>{
                   return <li key={item}><button>{item}</button></li>
                })}
            </ul>
        </nav>
    )
}

export default TopNavAdmin;