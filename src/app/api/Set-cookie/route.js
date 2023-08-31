import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
 
 


  

 

export async function GET(request: NextRequest){

    const response =NextResponse, redirect (new URL('/src/app/blogpage', request.url), {status:302});

    response.cookies.set({

        Nane:'theme',
        Value:'dark',
        expires:new Date(2023, new Date ().getDate(), new Date (), getHours()+ 3,0,0),
        path:'/',
        Secure:true,
        httpOnly:true,
        SameSite:'strict'


    })

    return response;

}