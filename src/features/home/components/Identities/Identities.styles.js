import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },

  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  identitiesList: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  listItemLast: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderBottomWidth: 0,
  },

  identityName: {
    fontSize: 16,
  },

  identityDescription: {
    fontSize: 12,
    fontWeight: '500',
  },

  footnote: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
