import React, { Component } from 'react'
import AutoComplete from 'react-native-autocomplete-modal'


const countries = [
    {
        country: {
            name: 'Pakisan'
        }
    },
    {
        country: {
            name: 'Turkey'
        }
    }
]

export default class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: ''
        }
    }
    
    render() {
        return (
            <View>
                    <AutoComplete
                        onSelect={data => this.setState({ country: data.country.name })}
                        dataSource={countries}
                        value={this.state.country}
                        textLabel="Select Country"
                        searchPlaceholder='Search Country'
                        cancelText="Close"
                        searchField="country.name"
                        textColor="white"
                    />
            </View>
        )
    }
}
