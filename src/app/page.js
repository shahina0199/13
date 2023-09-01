  'use client';
 
   

//   export default function Home(){
//     const handleSet=()=>{
       

//       (async () =>{
//         await fetch('http://localhost:3000/api/Set-cookie')
//       }) ();
//     }


//   return(
              
//     <div className="container">
//       <p>Home Page</p>
//       <button className="btn" onClick={handleSet}>
//       Set-Cookie</button>

//     </div>


//   )

// }
  

const Home = () => {
  const handleSet = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/Set-cookie/route.js', {
        method: 'POST',
      });

      if (response.ok) {
        console.log('User preference set successfully');
      } else {
        console.error('Failed to set user preference');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
             
    <div className="container">
      <p>Home Page</p>
      <button className="btn" onClick={handleSet}>
      Set-Cookie</button>

    </div>


  );
};

export default Home;

