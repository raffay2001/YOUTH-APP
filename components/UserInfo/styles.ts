import {StyleSheet} from 'react-native';

export const userInfoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 18,
  },
  userInfoContainer: {
    rowGap: 6,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 24,
  },
  userName: {
    color: '#2D2D2D',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 16,
  },
  timeLocationContainer: {
    flexDirection: 'row',
    columnGap: 8,
  },
  threeDotsContainer: {
    marginTop: -12,
  },
});
