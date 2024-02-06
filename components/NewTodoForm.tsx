import styles from './style.module.css'
import { newTodo } from '@/utils/actions'

const NewTodoForm = ({ }) => {
    return (
        <div>
            <form action={newTodo} >
            
                <input name="albert" type="text" className={styles.input} /*className="border border-black/25"*/  />
                {/* <input name="price" type="text" className={styles.input} className="border border-black/25"  /> */}
                <button type="submit" >  Submit New Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm



//for typing stuff in and make new todo
//client component
// 'use client'
// import { useState } from "react"

// const NewTodoForm = ( {onChange} ) => {
//     const [state, updateState] = useState('')
    
//     return (
//         <div>
//             <form>
//                 <input type="text" />
//             </form>
//         </div>
//     )
// }

// export default NewTodoForm

/*
REMEMBER THIS:

Server side rendering is when the component gets rendered on the server, 
but then we'll have some Javascript that gets downloaded- this is the 
exact replica of this componenet that then takes over

Scott logged a window, which broke the server because there's no window on
the server

This is server side rendering; server components are close to the same
thing except there is no Javascript on the front end that takes 
over it. 

The entire componenet is executed on the server so we can do database 
activity.


We can't pass non-serializable props between client and server components

*/

/*
SERVER ACTIONS: 

The ability to call a function that gets executed on the server
    This is what happens when you hit an API
    But you don't have to set up the API yourself

    Scott's rant that feels slightly important: 

    "So that means you can have a pretty interactiveapp without any JavaScript on it. 
    If all your app was was forms, which I know brings us back to when JavaScript and HTML 
    was first invented yeah cool story, butit's you won't get full page reloads either. 
    So you kind of get the best of both worlds.Yeah, so it's not back in a we submit a form and 
    it's just you're just waiting forthe whole thing to reload.You still not getting that. 
    But yeah, you execute code on the server.And this is same thing as something PHP, 
    literally the same thing as something like Elixir and Phoenix.It's literally the same thing. 
    The only difference is, it's all JavaScript.Whereas with those languages, you will do PHP on 
    the back end, butthen you're doing JavaScript on front end, or you're doing Phoenix andElixir on 
    the back end, you're doing JavaScript on front end.This is just all JavaScript, which could be a 
    benefit if you know JavaScript."

    Two ways to make server actions: 
        If we're in a component, all we need to do is make a function and use the 'use server' directive
        at the top of that function.

            const Home = async () => {
                const update = async (data) => {
                'use server'
                const email = data.get('email')
                // ....
        }

            return (
                <form action={update}>
                    <input name="email" type="email" />
                    <button type="submit">sign up</button>
                </form>
            )
        }
^^^ This is using the server actions on the action prop of a form ^^^
        Action prop: a function to run when the form is submitted
            If we just put a function there, it'll reload the whole
            page and start doing stuff we don't want
        We want to run this server action when this form is updated

    The other way which is more preferable by Scott is creating another file in utils,

    "I'm gonna call it actions.At the very top of this file, I'm gonna say use server. 
    So I'd rather have use server in this entire file.And then that way everything in this 
    file is gonna be guaranteed to executeon the server.So I'm just gonna do that. 
    And we're gonna make a new action.We're gonna export it, and it's just a function that creates a todo. 
    I'm gonna call it new todo.It takes in some content, and it's just gonna import the database and use that. 
    So we're gonna say import DB from,actually we don't have todo the at sign, we're right next to it,DB And 
    I'm just gonna say todo equals, need to async this.So todo = await dbtodo.create.And you wanna add a property 
    called data, anddata is all the things that you need to create todo with.In this case, the only thing todo needs 
    to be created is content.Everything else is either defaulted or not necessary."
*/

// TO OPEN UP DATABASE IN HERE, GO TO A NEW TERMINAL AND 
// RUN COMMAND NPX PRISMA STUDIO