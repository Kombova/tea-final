'use client'
import { useState } from "react";
import HeaderAdmin from "@/admin-components/header/HeaderAdmin";
const Admin = () =>{
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('img', selectedImage);
    
        fetch('/api/products', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            // Обработка ответа от сервера
          })
          .catch(error => {
            // Обработка ошибок
          });
      };
    return(
        <div className="w-screen min-h-screen">   
            <HeaderAdmin/>    
            <footer>Footer</footer>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Загрузить</button>
            </form>
        </div>
    )
}

export default Admin;