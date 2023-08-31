  'use client';
 
   

  export default function Home(){
    const handleSet=()=>{
       

      (async () =>{
        await fetch('http://localhost:3000/api/Set-cookie')
      }) ();
    }


  return(
              
    <div className="container">
      <p>Home Page</p>
      <button className="btn" onClick={handleSet}>
      Set-Cookie</button>

    </div>


  )

}
  

