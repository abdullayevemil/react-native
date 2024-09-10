import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  StatusBar
} from 'react-native';

const currentBalance = 7429.23;

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'#3A2636'}
        barStyle={'light-content'}
      />

      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <View style={styles.galleryContainer}>
              <Image style={styles.galleryImage} source={require('./assets/icons/gallery.png')} />
            </View>
            <View>
              <Text style={styles.headerSubtitle}>Hello!</Text>

              <Text style={styles.headerTitle}>Esther Howard</Text>
            </View>
          </View>

          <Pressable style={styles.walletButton}>
            <Image source={require('./assets/icons/wallet.png')} />
          </Pressable>
        </View>

        <View style={styles.balanceContainer}>
          <View style={styles.balanceDetails}>
            <Text style={styles.balanceTitle}>Current Balance</Text>

            <View style={styles.currentBalanceContainer}>
              <Text style={styles.currency}>$</Text>

              <Text style={styles.currentBalance}>{currentBalance}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#3A2636',
    paddingHorizontal: 18,
    gap: 42,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
  },
  profile: {
    flexDirection: 'row',
    gap: 12,
  },
  galleryContainer: {
    borderRadius: 9999,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
  },
  galleryImage: {
    width: 24,
    height: 24,
  },
  headerSubtitle: {
    color: '#9c929b',
    fontSize: 16,
    fontFamily: 'Clash Grotesk',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Clash Grotesk',
  },
  walletButton: {
    borderRadius: 9999,
    borderColor: '#746772',
    borderWidth: 2,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceContainer: {
    height: 183,
    gap: 8,
  },
  balanceDetails: {
    marginHorizontal: 14,
    alignItems: 'center',
    gap: 8,
    borderBottomWidth: 1,
    borderColor: '#60515e',
    paddingBottom: 8,
  },
  balanceTitle: {
    fontSize: 18,
    color: '#9c929b',
    fontFamily: 'Clash Grotesk',
  },
  currentBalanceContainer: {
    flexDirection: 'row',
  },
  currency: {
    fontSize: 48,
    color: '#c4bec3',
    fontFamily: 'Clash Grotesk',
  },
  currentBalance: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'Clash Grotesk',
  },
});
