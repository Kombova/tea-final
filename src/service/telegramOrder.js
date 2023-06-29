
const telegramOrder =async (message) =>{
    const URI_API_TELEGRAM = `https://api.telegram.org/bot${process.env.TOKEN_TELEGRAM}/sendMessage`;
    try{
        const response =await fetch(URI_API_TELEGRAM,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id : process.env.CHAT_ID_TELEGRAM,
                parse_mode: 'html',
                text: message
            })
        })
        if (response.ok) {
            console.log('Сообщение успешно отправлено в Telegram');
          } else {
            console.error('Ошибка при отправке сообщения в Telegram:', response.status);
          }
    }catch (error) {
        console.error('Ошибка при отправке запроса в Telegram API:', error);
      }
}
export default telegramOrder;