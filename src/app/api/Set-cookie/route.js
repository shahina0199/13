  
 
import { NextResponse } from 'next/server';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Customize the preference value as needed (e.g., "theme: dark" or "language: en")
    const preference = 'theme: dark';

    // Set the preference cookie
    res.setHeader('Set-Cookie', `user_preference=${preference}; Path=/`);

    return NextResponse.json(
      { status: true, message: 'User preference set successfully' },
      { status: 201 }
    );
  }

  return NextResponse.error('Invalid request method', { status: 405 });
};

 

 

  

 

// export async function GET(request: NextRequest){

//     const response =NextResponse, redirect (new URL('/src/app/blogpage', request.url), {status:302});

//     response.cookies.set({

//         Name:'theme',
//         Value:'dark',
//         expires:new Date(2023, new Date ().getDate(), new Date (), getHours()+ 3,0,0),
//         path:'/',
//         Secure:true,
//         httpOnly:true,
//         SameSite:'strict'


//     })

//     return response;

// }