import React, {Component} from 'react';
import { TouchableWithoutFeedback, Button, View, Text, StyleSheet, ToastAndroid, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import {Image} from 'react-native' ; 

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 10}}>
          
        <View style={{backgroundColor: '#F5B7B1', borderRadius: 10}}>
            
            <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('AI Test')}
            >
                  <Text style={styles.btn_move}>퍼스널컬러 테스트하기
                </Text>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('AI Test')}
            >
                  <Text style={styles.btn_move_text}>인공지능으로 퍼스널컬러를 테스트해보세요.
                </Text>
            </TouchableWithoutFeedback>
            
            <View style={{alignItems:'center'}}>
            <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('AI Test')}
            >
                  <Image style={{width: 300, height: 200, resizeMode: 'center'}} source = {require('./graphic.png')} />
            </TouchableWithoutFeedback>
                </View>
            <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('AI Test')}
            >
                  <Text style={styles.btn_move_text2}>
                      ※ 필터를 적용시키지 말고 얼굴 전체가 자세히 나오게 사진을 업로드해주세요
                </Text>
            </TouchableWithoutFeedback>
            
        </View>
          
          
        <View style={{marginTop:10, backgroundColor: '#D7BDE2', borderRadius: 10}}>
            <TouchableWithoutFeedback
                      onPress={() => navigation.navigate('Self Test')}
             >
                 <Text style={styles.btn_move2}>자가진단하기</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Self Test')}
            >
                <Text style={styles.btn_move2_text}>
                    혼자서 간단히 해볼 수 있는 자가진단 기능입니다.
                </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Self Test')}
            >
                <Text style={styles.btn_move_text2}>
                    ※ 햇빛 아래나 조명이 밝은 곳에서 진행해주세요</Text>
            </TouchableWithoutFeedback>
            
        </View>
          <View style={{marginTop:10, backgroundColor: '#AED6F1', borderRadius: 10, alignItems:'center'}}>
              <TouchableWithoutFeedback

            >
                <Text></Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback

             >
                 <Text style={styles.btn_move3}>COMING SOON</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback

            >
                <Text>
                </Text>
            </TouchableWithoutFeedback>
        </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <WebView
        source={{uri: 'https://personalcolorotest.netlify.app/personalcolortest.html'}}
        style={{marginTop: 20}}
      />
  );
}

function SelfScreen({ navigation }) {
  return (
    <WebView
        source={{uri: 'https://personalcolorotest.netlify.app/selftest'}}
        style={{marginTop: 20}}
      />
  );
}

const Stack = createStackNavigator();

export default class App extends React.Component {
	
	componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}
    componentWillUnmount() {
        this.exitApp = false;
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

	handleBackButton = () => {
        // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
        if (this.exitApp == undefined || !this.exitApp) {
            ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
            this.exitApp = true;

            this.timeout = setTimeout(
                () => {
                    this.exitApp = false;
                },
                2000    // 2초
            );
        } else {
            clearTimeout(this.timeout);

            BackHandler.exitApp();  // 앱 종료
        }
        return true;
    }
    render() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Personal Color"
            component={HomeScreen}
            options={{
                  headerTintColor: '#4DEAE7',
              }}
            />
        <Stack.Screen name="AI Test" component={DetailsScreen} options={{
                  
              }} />
        <Stack.Screen name="Self Test" component={SelfScreen} options={{
                  
              }} />
      </Stack.Navigator>
    </NavigationContainer>
  );}
}


const styles = StyleSheet.create({
    btn_move: {
       fontSize: 25,
       padding: 10,
       color: 'white',
       paddingLeft: 30,
       paddingRight: 30,
    },
    btn_move_text: {
       fontSize: 15,
       paddingTop: 10,
       color: 'black',
       paddingLeft: 30,
       paddingRight: 30,
    },
    btn_move_text2: {
       fontSize: 10,
       padding: 10,
       color: 'black',
       paddingLeft: 30,
       paddingRight: 30,
    },
   btn_move2: {
       fontSize: 25,
       padding: 10,
       color: 'white',
       paddingLeft: 30,
       paddingRight: 30,
    },
    btn_move2_text: {
       fontSize: 15,
       padding: 10,
       color: 'black',
       paddingLeft: 30,
       paddingRight: 30,
    },
    btn_move3: {
       fontSize: 35,
       padding: 10,
       color: 'white',
       paddingLeft: 30,
       paddingRight: 30,
    },
});
