import React from "react";
import './App.css';
import Nav from "./Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact"
import './index.css';
import TodoTab from "./TodoTab";
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

// Container Component 
function App() {

    return (


        <Router>
            <Nav />
            <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/todos">
                    <NewTaskForm />
                    <TaskList />
                    <TodoTab />
                </Route>
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;