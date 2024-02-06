'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const newTodo = async (formData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('albert', 'price'),
        },
    })

revalidatePath('/todos')
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