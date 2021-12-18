// import PaintingList from './components/paintingList';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
// import Container from './components/Container/Container';
// import Box from './components/Box/Box';
// import paintings from './paintings.json';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPickerNew from './components/ColorPickerNew';
import React, { Component } from 'react';
import shortid from 'shortid';
// import ColorPickerNew from './components/ColorPickerNew';
// import Counter from './components/Counter'
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
// import Form from './components/Form';
import initialTodos from './todos.json';
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // formSubmitHendler = data => {
  //   console.log(data);
  // };

  toggleCompleted = todoId => {
    // console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* <ColorPickerNew
          options={[
            { label: 'red', color: '#F44336' },
            { label: 'green', color: '#4CAF50' },
            { label: 'blue', color: '#2196F3' },
            { label: 'grey', color: '#607D8B' },
            { label: 'pink', color: '#E91E63' },
            { label: 'indigo', color: '#3F51B5' },
          ]}
        /> */}
        {/* <Form onSubmit={this.formSubmitHendler} /> */}
        <div>
          <p>Quantity: {totalTodoCount}</p>
          <p>Done: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <ColorPickerNew options={colorPickerOptions} /> */}
        {/* <Dropdown />
        <Counter initialValue={10} /> */}
        {/* <Box type="small" classNames="big red" styles={{ color: '#ffffff' }} />
        <Box type="medium" />
        <Box type="large" /> */}

        {/* <Alert text="Upcc!" type="success" />
        <Alert text="Upcc!" type="warning" />
        <Alert text="Upcc!" type="error" /> */}
        {/* <ColorPicker options={colorPickerOptions} />
        <PaintingList items={paintings} /> */}
      </Container>
    );
  }
}

export default App;
