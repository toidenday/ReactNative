import React, { Component } from 'react';
import {ScrollView } from 'react-native';

import Collection from './Collection/Collection';
import Category from './Category/Category';
import Topproduct from './Topproduct/Topproduct';
export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <Collection />
                <Category />
                <Topproduct />
            </ScrollView>
        );
    }
}
