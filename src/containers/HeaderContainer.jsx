import React from 'react';

import Header from '../components/Header';

class HeaderContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = this.context.store;
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    
    render() {
        const todos = this.store.getState();

        return (
            <Header todos={todos}/>
        );
    }
}

HeaderContainer.contextTypes = {
    store: PropTypes.object
};

export default HeaderContainer;