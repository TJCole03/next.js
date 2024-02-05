import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
    //"give me all the todos"
    const todos = await db.todo.findMany({})
    return todos
}

const TodosPage = async () => {
    const todos = await getData()
    return <div><TodoList todos={todos} /></div>
}

export default TodosPage