import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
export default class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>

                    <Home />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'contact'}
                    title="Contact"
                    onPress={() => this.setState({ selectedTab: 'contact' })}>

                    <Contact />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}