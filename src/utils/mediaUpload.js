import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dWRqc2Z6aGdnZmp3bmZobW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NTgzODMsImV4cCI6MjA1MTAzNDM4M30.FqAXTjN0-UFSSwjyk_PhjGh_UjySnaX25s8KAQQaF4k`

const url = "https://hzudjsfzhggfjwnfhmmn.supabase.co";

const supabase = createClient(url,key);

export default function uploadMediaToSupabase(file){

  return new Promise((resolve,reject)=>{
    if(file == null){
      reject("File not added")
    }
    let fileName = file.name
    const extension = fileName.split(".")[fileName.split(".").length-1];

    

    const timestamp = new Date().getTime();

    fileName = timestamp+file.name+ "."+extension;

    supabase.storage.from("images").upload(fileName,
      file,{
      cacheControl : "3600",
      upsert : false,
    }).then(()=>{
      const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
      resolve(publicUrl);
    }).catch((err)=>{
      reject(err);
    });
  });





  

}











