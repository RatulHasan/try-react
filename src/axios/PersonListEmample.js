import React from 'react';

import axios from 'axios';

class PersonListEmample extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                console.log(persons);
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                { this.state.persons.map(person => <p>{person.id}) {person.title}</p>)}
            </div>
        )
    }
}

export default PersonListEmample;