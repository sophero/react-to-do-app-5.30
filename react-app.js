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
				<NewToDo newToDo={this.addToList}/>
				<ToDoList toDos={this.state.toDoList} toggleComplete={this.toggleComplete} />
			</div>
		)
	}

	addToList(newName, newPriority) {
		var newToDoList = this.state.toDoList;
		newToDoList.push({
			name: newName,
			priority: newPriority,
			completed: false
		});
		this.setState({toDoList: newToDoList});
	}

	toggleComplete(event) {
		let split = event.target.className.split(" ");
		let completeClass = split[1];
		if (completeClass === "complete") {
			event.target.className = split[0] + " incomplete";
		} else if (completeClass === "incomplete") {
			event.target.className = split[0] + " complete";
		}
	}

}

class NewToDo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newName: "",
			newPriority: "high"
		}

		this.handleNewToDo = this.handleNewToDo.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updatePriority = this.updatePriority.bind(this);
	}

	render() {

		return(
			<div className="add-new-task">
				<input onChange={this.updateName} className="new-task__name-input" type="text" placeholder="Type task here" value={this.state.newName} />
				<select onChange={this.updatePriority} className="new-task__priority-dropdown">
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
				<button onClick={this.handleNewToDo}>Add Task</button>
			</div>
		)
	}

	handleNewToDo() {
		this.props.newToDo(this.state.newName, this.state.newPriority);
		this.setState({newName: ""});
	}

	updateName(event) {
		this.setState({newName: event.target.value})
	}

	updatePriority(event) {
		this.setState({newPriority: event.target.value})
	}

}


function ToDoList(props) {
	var toDos = props.toDos.map(function(todo, index) {
		let checkClass = "checkbox";
		if (todo.completed) {
			checkClass += " complete";
		} else {
			checkClass += " incomplete";
		}
		return(
			<div key={index} className={todo.priority}>
				{todo.name}
				<div className={checkClass} onClick={props.toggleComplete}></div>
			</div>
		)
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
