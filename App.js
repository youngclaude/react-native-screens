import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './components/screens/Colors/colors';
import HorizontalScroll from './components/screens/HorizontalScroll/HorizontalScroll';

export default function App() {
  return (
    <>
      {/* <Colors /> */}


      <HorizontalScroll />



      {/* <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
});
