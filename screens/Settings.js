import { Text, View, StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';
import {colors} from '../constants/theme';

function SettingsScreen() {
    return (
      <View style={styles.container}>
        <MainHeader title="IN2NITE" />
        <Text>Profile page</Text>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default SettingsScreen;