import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5F3FD'}}>
      <View
        style={{
          backgroundColor: '#023020',
          height: 150,
          justifyContent: 'center',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Profile
        </Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 20}}>
        <Text style={{fontSize: 20, color: '#023020', fontWeight: 'bold'}}>
          Your Account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          height: 50,
          borderRadius: 10,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text style={{marginLeft: 10, color: '#023020'}}>
          Compamny information
        </Text>
      </View>
    </SafeAreaView>
  );
};
