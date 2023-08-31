import { NextResponse } from 'next/server'



export async function GET (req, res){
    const reqbody = await res.json ()

    return NextResponse.json(reqbody )
}

export async function POST(req, res) {

    const reqbody = await req.json()

    let message =reqbody['message'];
    let version =reqbody['version'];

    return NextResponse.json({message:message, version:version})

}