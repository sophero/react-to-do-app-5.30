class ToDoListApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			toDoList: props.toDoList
		}
	}

	render() {

		return(
			<div>
				<h1>Welcome to my App!</h1>
				<ToDoList toDos={this.state.toDoList} />
			</div>
		)
	}

}

function ToDoList(props) {

	var toDos = props.toDos.map(function(todo, index) {
		return <div key={index}>{todo.name}</div>
	});

	return <div className="todos">{toDos}</div>

}

var toDoList = [
	{
		name: "go to work",
		priority: "medium"
	},
	{
		name: "eat lunch",
		priority: "high"
	},
	{
		name: "go to trader joe's",
		priority: "low"
	}
]

ReactDOM.render(
	<ToDoListApp toDoList={toDoList}/>,
	document.getElementById("react")
)
