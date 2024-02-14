import TodoList from '@/components/TodoList'
import db from '@/utils/db'

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

export default TodosPage