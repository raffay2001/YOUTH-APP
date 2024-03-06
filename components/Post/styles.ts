import {StyleSheet} from 'react-native';

export const postStyles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  postImageBackground: {
    width: '100%',
    height: 400,
  },
  blurTint: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
  actionBarContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 18,
    paddingHorizontal: 8,
  },
  actionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2,
  },
  actionItemText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  followButton: {
    backgroundColor: '#FE6587',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 5,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  topBarContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  carouselDotsContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userTagNameContainer: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
