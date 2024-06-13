import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  inputViewWrapper: {
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  formWrapper: {
    padding: 20,
    flexDirection: 'column',
    borderRadius: 10,
  },
  inputBoxWrapper: {
    marginBottom: 20,
  },
  inputBox: {
    // borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 50,
    fontSize: 14,
  },
  formActions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
});
