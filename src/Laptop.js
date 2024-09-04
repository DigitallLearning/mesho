import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
export default function Laptop() {
  const [apidata,setData]=useState([])
  useEffect(()=>{
        fetch("http://localhost:4000/").then((result)=>{
             result.json().then((data)=>{
                 setData(data)     
             })
        })    
  },[])
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
             apidata.map((item)=>
               item.pcat=="laptop"?
             <MDBCol>
             <br></br>
          <MDBCard>
           <center>
           <MDBCardImage
              src={item.pimage}
              alt='...'
              position='top'
              style={{width:"100px", height:"100px"}}
            />
           </center>
            <MDBCardBody>
              <MDBCardTitle>{item.pname}</MDBCardTitle>
              <MDBCardTitle style={{color:"red"}}>{item.pprice} </MDBCardTitle>
              <MDBCardTitle style={{color:"green"}}>{item.pcat}</MDBCardTitle>
              <MDBCardText>{item.pdesc}</MDBCardText>
              <MDBBtn>Show Details</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>:null
            )
        }
    </MDBRow>
  );
}