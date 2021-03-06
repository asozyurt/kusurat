

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, BackHandler } from 'react-native';
import At from './pow_basic3';


export default class Pow_getpowTYS extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 4 }}>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>

                </Header>
                <Content style={{ padding: 10, }}>
                    <At></At>
                </Content>

            </Container>
        );
    }
    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    handleBackButtonClick = () => {
        this.props.navigation.navigate("Pow_getpowPages");
        return true;
    }
    back = () => {
        this.props.navigation.navigate("Pow_getpowPages");
    };
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
        fontSize: 25,
        padding: 5
    },
    buttontext: {
        textAlign: "center",
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});
