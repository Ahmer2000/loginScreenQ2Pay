/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
// import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';


function App(): React.JSX.Element {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handlePressBtn = () => {
    if (!userName || !password) {
      Alert.alert('Please enter the User Id and Password.');
    }
    else {
      Alert.alert(`Thank you, ${userName}!`);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eBecf4' }}>
      <View style={styles.sectionContainer}>
        <Image
          style={styles.image}
          source={{uri:'data:image/jpeg;base64,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'}} />
        <Text style={styles.title}>Sign in to my app</Text>
        <Text style={styles.subTitle}>Get access to the app</Text>
        <Text style={styles.inputLabel}>User Id</Text>
        <TextInput style={styles.input} autoCapitalize="none"
          autoCorrect={false} value={userName} onChangeText={(userNameData) => setUserName(userNameData)} />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true}
          value={password} onChangeText={(passwordData) => setPassword(passwordData)} />
        <TouchableOpacity onPress={handlePressBtn} style={{ alignItems: 'center' }}><Text style={styles.inputBtn}>Login</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 15,
  },
  title: {
    color: '#lelele',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  subTitle: {
    color: '#6e6e6e',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputLabel: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '700',
    color: '#222 ',
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
  },
  inputBtn: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: '500',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    textAlign: 'center',
    color: '#463eb0',
  },
});

export default App;
