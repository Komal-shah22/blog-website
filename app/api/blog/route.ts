import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { ConnectDB } from '../../../lib/config/db';
import BlogModel from '@/lib/config/models/blogmodel';

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();  
export async function GET(request: Request) {

//     const blogs = await BlogModel.find({});
//   const url = new URL(request.url); 
//   const id = url.searchParams.get('id'); 
//   return NextResponse.json({ blogs , id });
}
export async function POST(request: Request) {
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get('image');
  
  if (image && typeof image !== 'string') {
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    
    await writeFile(path, buffer);
    
    const imgurl = `/${timestamp}_${image.name}`;
    const blogData ={
       title:`${formData.get('title')}`,
       description:`${formData.get('description')}`,
       category:`${formData.get('category')}`,
       author:`${formData.get('author')}`,
       image:`${imgurl}`,
       authorImg:`${formData.get('autharImg')}`
    }
    await BlogModel.create(blogData);
    console.log('Blog Saved')

    
    return NextResponse.json({ success:true,msg:'Blog Added' }); 
  } else {
    return NextResponse.json({ error: 'No image provided' }, { status: 400 });
  }
}
