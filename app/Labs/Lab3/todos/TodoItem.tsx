import ListGroupItem from "@/node_modules/react-bootstrap/esm/ListGroupItem";
const TodoItem = ( { todo = { done: true, title: 'Buy milk',
                            status: 'COMPLETED' } }) => {
return (
<ListGroupItem>
    <input type="checkbox" className="me-2"
            defaultChecked={todo.done}/>
    {todo.title} ({todo.status})
</ListGroupItem>
);}
export default TodoItem;