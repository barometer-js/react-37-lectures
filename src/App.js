import React, { Component } from 'react';
import Container from './components/Container';
// import { ToastContainer } from 'react-toastify';
// import shortid from 'shortid';
// import PaintingList from './components/paintingList';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
// import Container from './components/Container/Container';
// import Box from './components/Box/Box';
// import paintings from './paintings.json';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPickerNew from './components/ColorPickerNew';
// import ColorPickerNew from './components/ColorPickerNew';
// import Counter from './components/Counter'
// import TodoList from './components/TodoList';
// import TodoEditor from './components/TodoEditor';
// import TodoFilter from './components/TodoFilter';
// import Modal from './components/Modal';
// import IconButton from './components/IconButton';
// import { ReactComponent as AddIcon } from './components/icons/add.svg';
// import Clock from './components/Clock';
// import Form from './components/Form';
// import initialTodos from './todos.json';
// import Tabs from './components/Tabs/Tabs';
// import tabs from './tabs.json';
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
    pokemon: null,
    loading: false,
    // todos: initialTodos,
    // filter: '',
    // showModal: false,
  };

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // formSubmitHendler = data => {
  //   console.log(data);
  // };

  // toggleCompleted = todoId => {
  //   // console.log(todoId);

  //   // this.setState(prevState => ({
  //   //   todos: prevState.todos.map(todo => {
  //   //     if (todo.id === todoId) {
  //   //       return {
  //   //         ...todo,
  //   //         completed: !todo.completed,
  //   //       };
  //   //     }
  //   //     return todo;
  //   //   }),
  //   // }));

  //   this.setState(({ todos }) => ({
  //     todos: todos.map(todo =>
  //       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  //     ),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleTodos = () => {
  //   const { filter, todos } = this.state;

  //   const normalizedFilter = filter.toLowerCase();

  //   return todos.filter(todo =>
  //     todo.text.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // calculateCompletedTodos = () => {
  //   const { todos } = this.state;

  //   return todos.reduce(
  //     (total, todo) => (todo.completed ? total + 1 : total),
  //     0,
  //   );
  // };

  // componentDidMount() {
  //   console.log('App ComponentDidMount');

  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('App componentDidUpdate');
  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;

  //   if (nextTodos !== prevTodos) {
  //     console.log('Update todos');

  //     localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   }

  //   if (nextTodos.length > prevTodos.length) {
  //     this.toggleModal();
  //   }
  // }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  componentDidMount() {
    this.setState({ loading: true });

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon: pokemon }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    // console.log('App render');

    // const { todos, filter, showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
          {this.state.loading && <h1>Loading...</h1>}
          {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
        </div>
        {/* <Tabs items={tabs} /> */}
        {/* {showModal && <Clock />} */}

        {/* <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="white" />
        </IconButton> */}

        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )} */}

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
        {/* <div>
          <p>Quantity: {totalTodoCount}</p>
          <p>Done: {completedTodoCount}</p>
        </div>

        <TodoFilter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
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
