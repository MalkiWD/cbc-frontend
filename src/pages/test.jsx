import { createClient } from "@supabase/supabase-js"
import { useState } from "react"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dWRqc2Z6aGdnZmp3bmZobW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NTgzODMsImV4cCI6MjA1MTAzNDM4M30.FqAXTjN0-UFSSwjyk_PhjGh_UjySnaX25s8KAQQaF4k`

const url = "https://hzudjsfzhggfjwnfhmmn.supabase.co"

export default function FileUploadTest(){
  const [file,setFile] = useState(null)

  function handleUpload(){
    if(file==null){
      alert("Please select a file")
      return
    }
   

    const fileName = file.name
    const extension = fileName.split(".")[fileName.split(".").length-1]

    if(extension != "jpg" && extension != "png"){
      alert("Please select a jpg or png file")
      return
    }

    const supabase = createClient(url,key)

    supabase.storage.from("images").upload(file.name,
      file,{
      cacheControl : "3600",
      upsert : false
    }).then((res)=>{
      console.log(res)
    })

    const url2 = supabase.storage.from("images").getPublicUrl(file.name)

    console.log(url2)

  }
  return(
    <div>
      <h1>File Upload Test</h1>
      <input type="file" onChange={(e)=>{
        setFile(e.target.files[0])
      }}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}