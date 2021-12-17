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
// import ColorPickerNew from './components/ColorPickerNew';
import TodoList from './components/TodoList';
import Form from './components/Form';
import initialTodos from './todos.json';
import Container from './components/Container';
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
    inputValue: 'qweqwe',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHendler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

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
        <Form onSubmit={this.formSubmitHendler} />
        {/* <div>
          <p>Quantity: {totalTodoCount}</p>
          <p>Done: {completedTodoCount}</p>
        </div> */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
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
