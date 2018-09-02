import React from 'react';

import axios from 'axios';

class PersonListEmample extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        // https://jsonplaceholder.typicode.com/
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(persons);
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                { this.state.persons.map(person =>
                    <p key={person.id}>
                        {person.id}) {person.username}<br/> ZipCode- {person.address.zipcode}
                    </p>
                )}
            </div>
        )
    }
}

export default PersonListEmample;