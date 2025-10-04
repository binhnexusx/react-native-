import {Text, StyleSheet} from 'react-native';

const RenderText = () => {
  return <Text style={styles.text}>Hello, my name's Hoàng Thanh Bình</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 10,
  },
});
export default RenderText;
