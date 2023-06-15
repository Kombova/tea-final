'use client'

// async function sendOrder(orderData) {
//     try {
//       const entry = await clientCreateOrder.getSpace().createEntry('order', {
//         fields: {
//           // Здесь определите поля заказа, например:
//           title: {
//             'en-US': orderData
//           },
//           // Другие поля заказа...
//         }
//       });
      
//       // Сохраняем изменения
//       await entry.publish();
  
//       console.log('Заказ успешно отправлен!');
//     } catch (error) {
//       console.error('Ошибка при отправке заказа:', error);
//     }
//   }
const ProductCard = () =>{
    return(
        <>
            <button onClick={()=>{sendOrder()}}>Send Order!!!</button>
        </>
    )
}

export default ProductCard