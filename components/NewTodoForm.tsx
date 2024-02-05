const NewTodoForm = ({ }) => {
    return (
        <div>
            <form>                          
                <input type="text" className="border border-black/25" />
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