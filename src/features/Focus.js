import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utilities/colors';
import { RoundedButton } from '../components/RoundedButton';

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <RoundedButton
          size={65}
          title="+"
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    marginTop: 20,
  },

  inputContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 25,
  },

  textInput: {
    width: 320,
    marginRight: 25,
  },
});

export { Focus };
