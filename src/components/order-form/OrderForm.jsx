'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlobalStateContext } from '@/context/GlobalState';
import ResponseOrder from './ResponseOrder';
import OrderCart from './OrderCart';
const initialValues = {
    firstName: '',
    lastName: '',
    methodDelivery: 'novaPoshta',
    postOfficeNumber: '',
    phoneNumber: '',
    city: ''
  };
  
  const validateForm = values => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = 'Введіть імʼя';
    }
    if (!values.city) {
      errors.city = 'Введіть назву міста';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Введіть прізвище';
    }
  
    if (!values.methodDelivery) {
      errors.methodDelivery = 'Оберіть пошту';
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Введіть номер телефону';
    }

    if (!values.postOfficeNumber) {
        errors.postOfficeNumber = 'Введіть номер відділення';
      }
      if (!values.postOfficeNumber) {
        errors.postOfficeNumber = 'Введите число';
      } else if (isNaN(values.postOfficeNumber)) {
        errors.postOfficeNumber = 'Введите допустимое число';
      }
  
    return errors;
  };
  
  

const OrderForm = ({setState}) =>{
  const[showResponse,setShowResponse]=useState(false)
  const[showLoader,setShowLoader]=useState(false)
  const[selectPost,setSelectPost]=useState('Нова Пошта')
  const router = useRouter();
  let{globalState}=useContext(GlobalStateContext);


  const handleSubmit = async(values, { setSubmitting }) => {
    setShowLoader(true)
    // setShowResponse(true)

    let message = `  <b>ЗАКАЗ</b>\n\n\n`;
    message += `\u{1F603} Имя: <b>${values.firstName}</b>\n\n`
    message += `\u{1F60F} Фамилия: <b>${values.lastName}</b>\n\n`
    message += `\u{1F4F1} Телефон: <b>${values.phoneNumber}</b>\n\n`
    message += `\u{1F9ED} Город: <b>${values.city}</b>\n\n`
    message += `\u{1F69A} Почта: <b>${values.methodDelivery}</b>\n\n`
    message += `\u{1F3E2} Отделение: <b>${values.postOfficeNumber}</b>\n\n`
    message += `*******************\n\n`
    let sum=0;
    globalState.shoppingCartArr.forEach(element => {
      message += `\u{1F4E6} <b>Название:</b>\n`
      message += `${element.title}\n\n`
      message += `<b>Количество:</b>\n`
      message += `${element.amount}\n\n`
      message += `<b>Цена:</b>\n`
      message += `${element.price} грн\n\n`
      message += `~~~~~~~~~~~~~~~ \n\n`
      sum += element.price
    });
    message += `\u{1F4B0} Сумма заказа: <b> ${sum} грн</b>\n\n`
        try{
            const response =await fetch('/api/telegram',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    client: message,
                    
                })
            })
            if (response.ok) {
                console.log('Сообщение успешно отправлено в Telegram');
                setShowLoader(false)
                setShowResponse('Ok')
              } else {
                console.error('Ошибка при отправке сообщения в Telegram:', response.status);
                setShowLoader(false)
                setShowResponse('Error')
              }
        }
        catch (error) {
            console.error('Ошибка при отправке запроса в Telegram API:', error);
            setShowLoader(false)
            setShowResponse('Error')
          }
           
  };

    return(
  <div className='flex justify-center gap-5 flex-wrap '>
    {!showResponse &&
    <>
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
    {({ isSubmitting }) => (
      <Form className=''>
        
        
          <div className=' relative p-4   justify-center  border-r-[1px] border-b-[1px] border-solid border-[grey]'>
            <button className='absolute top-0 left-[20px]' onClick={()=>{router.back()}}><Image src='back.svg' width={20} height={20} alt='Exit' /></button>
              <div className='flex items-center  w-[400px] max-[950px]:w-full py-10  flex-wrap'>
                  <div className='w-full  flex flex-col'>
                      <label htmlFor="firstName">Ім&apos;я:</label>
                      <Field className=' border border-solid border-[grey] rounded px-2 text-center' type="text" id="firstName" name="firstName" />
                      <ErrorMessage name="firstName" component="div" className="text-red-500"/>
                  </div>
  
                  <div className='w-full  flex flex-col'>
                      <label htmlFor="lastName">Прізвище:</label>
                      <Field className='border border-solid border-[grey] rounded px-2 text-center' type="text" id="lastName" name="lastName" />
                      <ErrorMessage name="lastName" component="div" className="text-red-500"/>
                  </div>
                  <div className='w-full  flex flex-col'>
                      <label htmlFor="city">Місто:</label>
                      <Field className='border border-solid border-[grey] rounded px-2 text-center' type="text" id="city" name="city" />
                      <ErrorMessage name="city" component="div" className="text-red-500"/>
                  </div>
                  <p>Оберіть спосіб доставки:</p>
                  <div className='flex justify-center gap-2 w-full'>
                      <div>
                          <label className='w-[300px] relative h-[50px]'>
                              <Field className='hidden' type="radio" name="methodDelivery" id='novaPoshta' value="novaPoshta" />
                              <button onClick={()=> setSelectPost('Нова Пошта')}>
                                <Image className={` ${selectPost === 'Нова Пошта' ? 'border-[#0E8388] border-[4px]' : 'border-black border'}  border-solid  rounded-lg hover:scale-110`} src='/nova-poshta.png' width={50} height={50} alt='Нова пошта'/>
                              </button>
                              
                          </label>
                      </div>
  
                      <div>
                          <label>
                              <Field className='hidden'  type="radio" name="methodDelivery" id='ukrPoshta' value="ukrPoshta" />
                              <button onClick={()=> setSelectPost('Укр Пошта')}>
                                <Image className={`${selectPost === 'Укр Пошта' ? 'border-[#0E8388] border-[4px]' : 'border-black border'} border-solid  rounded-lg hover:scale-110`} src='/ukr-poshta.png' alt='Укр пошта' width={50} height={50} />
                              </button>
                              
                          </label>
                      </div>
                  </div>
  
                  <div className='w-full  flex flex-col'>
                      <label htmlFor="postOfficeNumber">Введіть номер відділення:</label>
                      <Field className='border border-solid border-[grey] rounded px-2 text-center' type="text" id="postOfficeNumber" name="postOfficeNumber" />
                      <ErrorMessage name="postOfficeNumber" component="div" className="text-red-500"/>
                  </div>
  
                  <div className='w-full  flex flex-col'>
                      <label htmlFor="phoneNumber">Номер телефону:</label>
                      <Field className='border border-solid border-[grey] rounded px-2 text-center' type="text" id="phoneNumber" name="phoneNumber" />
                      <ErrorMessage name="phoneNumber" component="div" className="text-red-500"/>
                  </div>
  
                  <button className="w-5/6 h-12 mt-5 mx-auto flex justify-center items-center text-[19px] text-white opacity-80 hover:opacity-100 rounded-[10px] font-semibold bg-[#0E8388]" type="submit" disabled={isSubmitting}>
                      Відправити
                  </button>
              </div>
          </div>
         
        
      </Form>
    )}
  </Formik>
  <OrderCart/>
  </>
}
    {showResponse && <ResponseOrder result={showResponse}/>}
   {showLoader && <div className='absolute top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50'><Image className='absolute top-0 left-0 w-full h-full' src='/spinner.svg' width={100} height={100} alt='spinner' /></div>}
  
  </div>
    )
}

export default OrderForm;