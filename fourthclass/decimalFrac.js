

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class decimalFracPage extends Component {
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('MainFour_Orientation');
        return true;
    }


    render() {
        return (
            <ScrollView syle={{ backgroundColor: 'white', flex: 5 }}>
                <Header style={{ backgroundColor: '#62B1F6' }}><Left></Left>
                    <Body><Title style={styles.heade}>KÜSUR-AT</Title></Body>

                </Header>
                <Content style={{ padding: 10, }} >
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decFragComa}><Text style={styles.buttontext}>Ondalık Kesirleri Virgül İle Yazma</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decFragComeandComp}><Text style={styles.buttontext}>Ondalık Kesirlerin Virgül Kısmı Tam Kısmı</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decFargRanking}><Text style={styles.buttontext}>Ondalık Kesirlerde Sıralama</Text></Button>
                </Content>

            </ScrollView>
        );
    }
    decFragComa = () => {
        this.props.navigation.navigate('four_decfrac_decFragComaPages');
    }
    decFragComeandComp = () => {
        this.props.navigation.navigate('four_decfrac_decFragComeandCompPages');
    }
    decFargRanking = () => {
        this.props.navigation.navigate('four_decfrac_decFargRankingPages');
    }
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: 'white',
        fontSize: 30,
        padding: 5
    },
    buttontext: {
        textAlign: "center",
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});
