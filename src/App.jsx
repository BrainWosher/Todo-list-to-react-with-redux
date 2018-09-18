import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { addTodo, deleteTodo, toggleTodo, editTodo } from './actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;
        
        this.handleAdd = this.handleAdd.bind(this);       
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleAdd(title) {
        this.store.dispatch(addTodo(title));
    }

    render() {
        const todos = this.store.getState();

        return (
            <main>
                <Header todos={todos} />

                <List store={this.store}/>

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

export default App;
