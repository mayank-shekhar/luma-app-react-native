import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listWrapper: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  listItemRender: {
    flexDirection: 'row',
  },

  listItemIOS: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  listItemIOSLast: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderBottomWidth: 0,
  },
});
