import axios from "axios"
import { useState } from "react"
function Upload()
{
    const [pid,setid]=useState()
    const [pname,setname]=useState()
    const [pprice,setprice]=useState()
    const [pcat,setcat]=useState()
    const [pdesc,setdesc]=useState()
    const [pimage,setimage]=useState()
    function submitForm(e)
    {
         e.preventDefault()
        // console.log(pid,pname,pprice,pdesc,pcat)
           const url="http://localhost:4000/"
           const formdata=new FormData()
           formdata.append("pid",parseInt(pid))
           formdata.append("pname",pname)
           formdata.append("pprice",parseInt(pprice))
           formdata.append("pdesc",pdesc)
           formdata.append("pcat",pcat)
           formdata.append("pimage",pimage)
           axios.post(url,formdata).then((result)=>{
                  console.log(result.data)
                  alert("Save Data")
           })


    }
     return(
        <div>
            <br></br>
           <center>
           <form>
            <input type="number" placeholder="Product ID" onChange={(e)=>setid(e.target.value)}/><br></br>
            <input type="text" placeholder="Product Name" onChange={(e)=>setname(e.target.value)}/><br></br>
            <input type="number" placeholder="Product Price" onChange={(e)=>setprice(e.target.value)}/><br></br>
            <input type="text" placeholder="Product Description" onChange={(e)=>setdesc(e.target.value)}/><br></br>
            Select Category<select onChange={(e)=>setcat(e.target.value)}>
                <option>mobile</option>
                <option>laptop</option>
                <option>electronics</option>
                <option>cloths</option>
                <option>shoe</option>
                <option>other</option>
            </select><br></br>
            <input type="file" onChange={(e)=>setimage(e.target.files[0])}/><br></br>
            <button onClick={submitForm}>Submit</button>
           </form>
           </center>
        </div>
     )
}
export default Upload