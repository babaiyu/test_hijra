import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Custom
  cardGradient: {
    width: '90%',
    height: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  circleCard: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  imageCart: {
    width: 50,
    height: 50,
  },
  floatButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: '47%',
    bottom: 20,
    zIndex: 100,
    borderRadius: 50,
    backgroundColor: '#0d47a1',
  },

  // Layout
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    margin: 15,
  },

  // Swipe List
  standaloneRowFront: {
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    padding: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#222222',
    height: 120,
  },
  standaloneRowBack: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    flex: 1,
  },
  leftButton: {
    height: 100,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9a825',
  },
  rightButton: {
    height: 100,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dd2c00',
  },

  // Typography
  textWhite: {
    color: '#FFFFFF',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textBase: {
    fontSize: 15,
  },
  textMedium: {
    fontSize: 20,
  },
  textSmall: {
    fontSize: 13,
  },
});

export default styles;
