//shows a todo
'use client'
import { useTransition } from "react"
import { completeTodo } from "@/utils/actions"


const Todo = ({ todo }) => {
    const [isPending, startTransition] = useTransition()
    // onClick is gonna take a callback, which calls startTransition, which takes a callback, 
    // which calls completeTodo, and pass in the todo.id.
    return (
        <div
            className={`border border-black/20 cursor-pointer
                    ${todo.completed ?
                    'line-through text-gray-600' : ''}`}
            onClick={() => startTransition(() => completeTodo(todo.id))}>
            {todo.content}
        </div>
    )
}

export default Todo