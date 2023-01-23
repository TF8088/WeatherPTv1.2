// Libs
import { View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import styles from './home-styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { /*Para dar refresh na pagina*/ console.log("Refresh"); }} >
          <Feather name="refresh-cw" size={30} color={colors.neutral[50]} />
        </TouchableOpacity>
        <Text style={styles.citytittle}> City </Text>
        <TouchableOpacity onPress={() => { /*Para dar refresh na pagina*/ console.log("Refresh"); }} >
          <Feather name="search" size={30} color={colors.neutral[50]} />
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

