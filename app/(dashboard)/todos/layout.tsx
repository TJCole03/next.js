import NewTodoForm from "@/components/NewTodoForm"

const DashboardLayout = ({children}) => {
    return <div>
        <h1>Dashboard- Modest Mouse</h1>
        <div>
            <NewTodoForm />
        </div>
        <div>{children}</div>
    </div>
}

export default DashboardLayout