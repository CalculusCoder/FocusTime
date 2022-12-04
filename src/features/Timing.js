import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

const Timing = ({ onChangeTime }) => {
  return(
    <View style={styles.timingButton}>
    <RoundedButton size={70} title='10' onPress={() => onChangeTime(10) } />
    <RoundedButton size={70} title='15' onPress={() => onChangeTime(15) } />
    <RoundedButton size={70} title='20' onPress={() => onChangeTime(20) } />
    </View>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export { Timing };