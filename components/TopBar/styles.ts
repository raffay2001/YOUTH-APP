import {StyleSheet} from 'react-native';

export const topBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icons: {
    width: 35,
    height: 35,
  },
  heading: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Montserrat-ExtraBold',
  },
});
