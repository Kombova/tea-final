import ProductCard from "../product/ProductCard";
const ShowCategories = ({
    productsArr,
    category = 'Усі',
    type = 'Усі',
}) => {
   
    return(
        <>
            {category === 'Усі' && type === 'Усі' &&
                productsArr.map((item)=> (<ProductCard product = {item} key={item.sys.id}/>))
            }
            {category === 'New' &&    
                productsArr.slice(4).map((item)=> (<ProductCard product = {item} key={item.sys.id}/>))    
            }
            {type === 'Усі' &&
                productsArr.filter((item)=>item.fields.category.sys.contentType.sys.id === category).map((item)=> (<ProductCard product = {item} key={item.sys.id}/>))
            }
            {type !== 'Усі' &&
                productsArr.filter((item)=>item.fields.category.fields.type === type).map((item)=> (<ProductCard product = {item} key={item.sys.id}/>))
            }
            
        
        </>
    )
}

export default ShowCategories;