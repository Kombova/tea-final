import { NextResponse } from "next/server"
import fs from 'fs';
import path from "path";
import clientDB from "@/app/service/connectDB";


export async function POST(req) {
//     try{
//       const formData = await req.formData();
//       const fields = {};

//       for (const [name, value] of formData.entries()) {
//         fields[name] = value;
//       }
// //-------Сохранение изображения локально
//       const imagePath = path.join(process.cwd(), 'public', 'products', fields.img.name);

//       const buffer = Buffer.from(await fields.img.arrayBuffer());

//       fs.writeFileSync(imagePath, buffer);
// //------- Сохранение товара в базу данных    
//       return NextResponse.json('goodDeal')
//     }
//     catch{
//       return NextResponse.json('Все пошло по пи..где?')
//     }
async function run() {
  const products = [];
  try {
    await clientDB.connect();
    await clientDB.db("tea-store").find().forEach(element => {
      products.push(element);
    })
    console.log("Good MongoDB!");
    console.log(products)
  } finally {
    // Ensures that the client will close when you finish/error
    await clientDB.close();
  }
}
run().catch(console.dir);
return NextResponse.json('goodDeal')
//.command({ ping: 1 })    
  

    
      


  }
  export async function GET(req) {
    
    return NextResponse.json('good')
      


  }