import './App.css';
import Header from './Header';
import Footer from './Footer';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 1, 
          title: 'Lorem ipsum dolor sit amet title todo 1',
          isDone: false
        },
        {
          id: 2, 
          title: 'Lorem ipsum dolor sit amet title todo 2',
          isDone: true
        },
        {
          id: 3, 
          title: 'Lorem ipsum dolor sit amet title todo 3',
          isDone: false
        }
      ]
    };
  }

  handleDeteleTodo(todoId) {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(item => item.id !== todoId)
    }));
  }

  render() {
    return (
      <>
      <Header></Header>
      <main className="page-main flex-centered">
        <div className="container">
        {this.state.todoList.length ?
          <ul className="list-group"> 
            {this.state.todoList.map((todo) =>
              <li className="list-group-item ">
                <div className={todo.isDone ? 'done' : 'undone'}>
                  <span className="icon fa fa-check" aria-hidden="true"></span>
                  {todo.title}
                  <button type="button" className="close" onClick={()=>{this.handleDeteleTodo(todo.id)}}>&times;</button>
                </div>
            </li>   
            )}
          </ul>
          : <p>No item</p>
        }
        </div>
      </main>
      <Footer></Footer>
      </>
    );
  }
}

export default App;
