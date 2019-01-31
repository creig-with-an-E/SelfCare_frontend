import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { CardSection,Header} from  '../components/common';
import {Button,Card,Icon, ListItem} from 'react-native-elements';


class MainScreen extends Component{
    render(){
        return (<View style={style.containerStyle}>
                        <Header headerText="Professionals"/>
                        <Card title='Magic Mike'
                              image={{uri:'https://d95vll9kevyvb.cloudfront.net/5pikaXYBvt4hQ-t3Br7PwpuCnr0=/13x0:787x533/580x0/https%3A//smallslivestatic.s3.amazonaws.com/artist_images/jonathan-barber.jpg'}} >
                            <Text style={{marginBottom: 10}}>
                                Real Barbers are born not made.! #masterBarber#mikeHair
                            </Text>
                            <Button
                                // icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Book Now' />
                        </Card>
        </View>)
    }
}

const style ={
    containerStyle:{
        marginTop:10
    }
}
export default MainScreen;