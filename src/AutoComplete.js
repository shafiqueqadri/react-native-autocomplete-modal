import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableHighlight, SafeAreaView, ScrollView } from "react-native";
import { Header, Item, Input, Button, Icon, Text } from 'native-base';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            displayText: this.props.value,
            dataSource: this.props.dataSource
        };
    }

    onSelectItem = (item, displayText) => {
        this.props.onSelect(item)
        this.setState({ show: false, displayText })
    }


    textToRender = item => {
        if (this.props.searchField && this.props.searchField.length > 0) {
            const fields = this.props.searchField.split('.')
            var result = item;
            fields.forEach(splitter => {
                result = result[splitter]
            });
            return result;
        }
        else {
            return item
        }
    }

    renderItem = (item, index) => {
        let displayText = this.textToRender(item)
        return (
            <Text
                key={index}
                style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: 'gray', borderColor: "gray", }}
                onPress={() => this.onSelectItem(item, displayText)}
            >
                {displayText}
            </Text>
        )
    }

    searchBinding = (item, search) => {
        let checkIfFound = item
        if (this.props.searchField && this.props.searchField.length > 0) {
            const fields = this.props.searchField.split('.')
            var result = item;
            fields.forEach(splitter => {
                result = result[splitter]
            });
            checkIfFound = result
        }

        return checkIfFound.toLowerCase().includes(search.toLowerCase());

    }

    searchData = t => {
        let dataSource = this.props.dataSource.filter(item => this.searchBinding(item, t))
        this.setState({ dataSource })
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.show}
                    onRequestClose={() => {

                    }}>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                        <View>
                            <Header searchBar rounded>
                                <Item>
                                    <Icon name="ios-search" />
                                    <Input
                                        autoCorrect={false}
                                        placeholder={this.props.searchPlaceholder}
                                        onChangeText={t => this.searchData(t)}
                                    />
                                    <Icon name="ios-flag" />
                                </Item>
                                <Button transparent onPress={() => this.setState({ show: false })}>
                                    <Text>{this.props.cancelText}</Text>
                                </Button>
                            </Header>
                            <ScrollView>
                                {
                                    this.state.show && this.state.dataSource.map((item, index) => this.renderItem(item, index))
                                }
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </Modal>
                <TouchableHighlight onPress={() => this.setState({ show: true })} style={{ ...this.props.style }}>
                    <Text style={{ color: this.props.textColor }}>{this.props.value || this.props.textLabel}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

AutoComplete.propTypes = {
    onSelect: PropTypes.func.isRequired,
    dataSource: PropTypes.array.isRequired,
    renderItem: PropTypes.func,
    searchField: PropTypes.string,
    style: PropTypes.object,
    textColor: PropTypes.string,
    textLabel: PropTypes.string,
    value: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    cancelText: PropTypes.string
};

AutoComplete.defaultProps = {
    renderItem: null,
    searchField: null,
    dataSource: [],
    textLabel: 'Choose one',
    style: {
        backgroundColor: 'blue'
    },
    textColor: 'black',
    value: '',
    searchPlaceholder: 'Search',
    cancelText: 'Cancel'
};

export default AutoComplete;
