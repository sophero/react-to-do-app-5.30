class ToDoListApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			toDoList: props.toDoList
		}
		this.addToList = this.addToList.bind(this);
	}

	render() {

		return(
			<div>
				<h1>Welcome to my App!</h1>
				<NewToDo newToDoFunc={this.addToList}/>
				<ToDoList toDos={this.state.toDoList} />
			</div>
		)
	}

	addToList() {

		var nameInput = document.getElementsByClassName('new-task__name-input')[0];
		if (nameInput.value === "") {
			return;
		}
		var taskName = nameInput.value;
		nameInput.value = "";
		nameInput.focus();
		var taskPriority = document.getElementsByClassName('new-task__priority-dropdown')[0].value;

		var newToDoList = this.state.toDoList;
		newToDoList.push({
			name: taskName,
			priority: taskPriority
		});
		this.setState({toDoList: newToDoList});
	}

}

class NewToDo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div className="add-new-task">
				<input className="new-task__name-input" type="text" placeholder="Type task here" />
				<select className="new-task__priority-dropdown">
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
				<button onClick={this.props.newToDoFunc}>Add Task</button>
			</div>
		)
	}

}


function ToDoList(props) {

	var toDos = props.toDos.map(function(todo, index) {
		return <div key={index} className={todo.priority}>{todo.name}</div>
	});
	toDos = toDos.reverse();
	return <div className="todos">{toDos}</div>

}

var toDoList = [
	{
		name: "go to work",
		priority: "low"
	},
	{
		name: "eat lunch",
		priority: "medium"
	},
	{
		name: "walk the dog",
		priority: "high"
	}
]

ReactDOM.render(
	<ToDoListApp toDoList={toDoList}/>,
	document.getElementById("react")
)
