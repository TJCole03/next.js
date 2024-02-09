//export different HTTP verbs that i want to run when thte matching one is 
//requested
//get, post, put, delete, options
import { NextResponse } from "next/server"
import db from '@/utils/db'

/*
when api/todo route gets triggered (user types it in), the function 
down below gets read into memory, executes, responds back, and shuts down.

Some performance techinques exist around keeipng functions 'warm', 
since reading the file is a cold start that causes performance
issues

*/
export const GET = async (request: Request) => {
    const todos = await db.todo.findMany({})
    return NextResponse.json({ data: todos})
}

export const POST = async (request: Request) => {
    const data = await request.json()
    const todo = await db.todo.create({data,})
    return NextResponse.json({ message: todo})
}

export const PUT = async (request: Request) => {
    const data = await request.json()
    const todo = await db.todo.update(data)
    return NextResponse.json({ message: todo})
}

export const OPTIONS = () => {

}

/*
if you want to get the data from the post request, typically,you do 
rec.body or something like that in express. Now, this is a request object
so you don't do that, so you'll get the data, and that will be on 
requests.json, you have to await it, then you can get the data, and 
that's the equivalent of getting the data off the body. 
So you don't have to set up middleware here, no body parser, none of that 
stuff, you just write a function and it's free, which is really cool. 
*/



/*
and that was it,I just made a server as made API route. 
So if you've ever had to set up API route before you just like, 
wow,this is a lot, well, okay, you get it for free now, 
you just make a file, and a verb and you have API now, which is 
pretty cool. 
*/

