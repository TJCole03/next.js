'user server'
import db from './db'

export const newTodo = (content) => {
    const todo = await db.todo.create({
        data: {
            content,
        },
    })

    
}






//sample code block of this for when I convert accounting app to a 
//next.js framework
// export const newEntry = (content) => {
//     const entry = await db.todo.create({
//         data: {
//             Date,
//             service,
//             price,
//         },
//     })
// }