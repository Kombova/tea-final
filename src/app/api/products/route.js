import { NextResponse } from "next/server"
import fs from 'fs';
import path from "path";
import clientDB from "@/app/service/connectDB";
import { ObjectId } from "mongodb";



async function run(newItem,randomID) {
  newItem.imgId = randomID;
  await clientDB.connect();
  const database = clientDB.db('tea-store');
  const collection = database.collection('products'); // Имя вашей коллекции
  const result = await collection.insertOne(newItem);
        
  
}


export async function POST(req) {
  const formData = await req.formData();
  const fieldsToDB = {};
  const imgArr = [];
  let randomID = crypto.randomUUID() + '.png';
  try{
    for (const [name, value] of formData.entries()) {
      name !== 'imgArr' ? fieldsToDB[name] = value : imgArr.push(value);
    }
    run(fieldsToDB,randomID).catch(console.dir);

    const imagePath = path.join(process.cwd(), 'public', 'products', `${randomID}`);
    const buffer = Buffer.from(await imgArr[0].arrayBuffer());
    fs.writeFileSync(imagePath, buffer);

    await clientDB.close();
    return NextResponse.json('goodDeal')
  }
  catch{
    await clientDB.close();
    return NextResponse.json('Error hz!')
  }
  
 
  

  
  

  }


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const iterator = searchParams.entries().next();
  const namePath = iterator.value[0];
  
  
  if (namePath === 'productId') {
    const id = searchParams.get('productId');
    try{
      await clientDB.connect();
      const database = clientDB.db('tea-store');
      const collection = database.collection('products');
      const product = await collection.findOne({ _id: new ObjectId(id) })
      await clientDB.close();
      return NextResponse.json(product)
    }
    catch(error){
      console.log(error)
      return NextResponse.json('product not found')
    }
  }else{
    try{
      await clientDB.connect();
      const database = clientDB.db('tea-store');
      const collection = database.collection('products');
      const result = await collection.find({}).toArray();
      await clientDB.close();
      return NextResponse.json(result)
    }
    catch{
      console.log('Eroorrrrr')
      await clientDB.close();
      return NextResponse.json('good')
    }
  }
    
    
    // const documents = await collection.find({}).toArray(); // Получение всех документов из коллекции


}





  // try{
    //   const formData = await req.formData();
    //   const fields = {};

    //   for (const [name, value] of formData.entries()) {
    //     fields[name] = value;
    //   }
//-------Сохранение изображения локально
      // const imagePath = path.join(process.cwd(), 'public', 'products', fields.img.name);

      // const buffer = Buffer.from(await fields.img.arrayBuffer());

      // fs.writeFileSync(imagePath, buffer);
//------- Сохранение товара в базу данных   
      // return NextResponse.json('goodDeal')
   // }
      // catch{
      //   return NextResponse.json('Все пошло по пи..где?')
      // }