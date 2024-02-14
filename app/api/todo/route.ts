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
export const DELETE = async (request: Request) => {
    const data = await request.json()
    const todo = await db.todo.delete({data,}) //not assignable to parameter of type...(see full message)
    return NextResponse.json({ message: todo })
}

export const OPTIONS = () => {
    return 
}

/*
When would we use these APIs??
    Not a whole lot. Here's why: 

    The Next.js High Council wants us to use server-side fetching instead

    We did that in the dashboard todos page:

            { //...import data
            
            const getData = async () => {
                //"give me all the todos"
                // await new Promise ((resolve, reject) => setTimeout(() => resolve(), 1000))
                // await new Promise ((resolve, reject) => setTimeout(() => reject(), 1000))
                const todos = await db.todo.findMany({})
                return todos
            }

            const TodosPage = async () => {
                const todos = await getData()
                return <div><TodoList todos={todos} /></div>
            }
                export default blahblahblah
            
            }

They want you to do this, and they're right, you should be doing this. 
This is way better.It's so much simpler. You don't have to go across the network. You're already on the server. 
The sweet thing about doing this is now the person's Internet is not a factor in how fast they get the data back 
because this happens on the server, which probably has fiber Internet. It's probably in some private network that's really quick. 
And you're not relying on someone's network connection to determine how quickthey're gonna get the data back because it's not happening on the client.
It's happening here, it's not going across the wire.


*/

/*
      'Access-Control-Allow-Origin': '*', || 'anyone is allowed in, no matter which browser'
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',

Only browsers implement CORS. So if you have one server talking to another server, 
CORS doesn't matter cuz only browsers look for CORS.

*/

/*
differences between API routes in the pages directory versus API routes in the 
app directory?

*/

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

