import {StyleSheet, Platform} from 'react-native';

const androidStyles = {
  listContainer: {
    borderRadius: 16,
  },
};

const isAndroid = Platform.OS === 'android';

export default StyleSheet.create({
  listContainer: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    ...(isAndroid && androidStyles.listContainer),
  },
});
