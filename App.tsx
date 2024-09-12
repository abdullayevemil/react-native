import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Pressable,
    Text,
    StatusBar, FlatList,
} from 'react-native';

const currentBalance = 7429.23;

const transactionsData = [
    {
        id: 1,
        name: 'Spotify Premium',
        time: 120,
        amount: 20,
    },
    {
        id: 2,
        name: 'Steam Top Up',
        time: 120,
        amount: 150,
    },
    {
        id: 3,
        name: 'Amazon',
        time: 120,
        amount: 57,
    },
    {
        id: 4,
        name: 'Dribble Pro',
        time: 120,
        amount: 110,
    },
    {
        id: 5,
        name: 'Epic Games',
        time: 120,
        amount: 200,
    },
    {
        id: 6,
        name: 'Epic Games',
        time: 120,
        amount: 200,
    },
    {
        id: 7,
        name: 'Epic Games',
        time: 120,
        amount: 200,
    },
    {
        id: 8,
        name: 'Epic Games',
        time: 120,
        amount: 200,
    },
    {
        id: 9,
        name: 'Epic Games',
        time: 120,
        amount: 200,
    },
    {
        id: 10,
        name: 'Epic Games',
        time: 120,
        amount: 200,
    },
];

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);

export const App = () => {
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.transaction}>
                <View style={styles.profile}>
                    <View style={styles.galleryContainer}>
                        <Image style={styles.galleryImage} source={require('./assets/icons/gallery.png')}/>
                    </View>

                    <View style={styles.transactionMainInfo}>
                        <Text style={styles.transactionName}>{item.name}</Text>

                        <Text style={styles.transactionTime}>{item.time} ago</Text>
                    </View>
                </View>

                <View style={styles.transactionDetails}>
                    <Text style={styles.transactionsAmount}>$</Text>

                    <Text style={styles.transactionsAmount}>{item.amount}</Text>
                </View>
            </View>
        );
    };

    return (
        <>
            <MyStatusBar
                backgroundColor='#3A2636'
                barStyle='light-content'
            />
            <SafeAreaView style={styles.container}>

                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <View style={styles.profile}>
                            <View style={styles.galleryContainer}>
                                <Image style={styles.galleryImage} source={require('./assets/icons/gallery.png')}/>
                            </View>

                            <View>
                                <Text style={styles.headerSubtitle}>Hello!</Text>

                                <Text style={styles.headerTitle}>Esther Howard</Text>
                            </View>
                        </View>

                        <Pressable style={styles.walletButton}>
                            <Image source={require('./assets/icons/wallet.png')}/>
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

                        <View style={styles.line}></View>

                        <View style={styles.cardManagementContainer}>
                            <Pressable style={styles.cardManagementButton}>
                                <Image style={styles.plusIcon} source={require('./assets/icons/plus-icon.png')}/>

                                <Text style={styles.addNewCard}>Add New Card</Text>
                            </Pressable>

                            <Pressable style={styles.cardManagementButton}>
                                <Image style={styles.plusIcon} source={require('./assets/icons/double-arrow.png')}/>

                                <Text style={styles.addNewCard}>Change Card</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.dragDownLine}/>
                </View>

                <View style={styles.recentTransactionsContainer}>
                    <View style={styles.transactionsHeader}>
                        <Text style={styles.transactionsTitle}>Recent Transactions</Text>

                        <Text style={styles.showAll}>Show All</Text>
                    </View>

                    <FlatList
                        data={transactionsData}
                        renderItem={renderItem}
                        style={styles.transactions}
                        contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}/>
                </View>
            </SafeAreaView>
        </>
    );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 32,
    },
    headerContainer: {
        backgroundColor: '#3A2636',
        paddingHorizontal: 18,
        gap: 42,
        paddingBottom: 14,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
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
        borderRadius: 100,
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
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
    },
    walletButton: {
        borderRadius: 100,
        borderColor: '#746772',
        borderWidth: 2,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    balanceContainer: {
        gap: 24,
        alignItems: 'center',
        width: '100%',
    },
    balanceDetails: {
        alignItems: 'center',
        gap: 8,
    },
    balanceTitle: {
        fontSize: 18,
        color: '#9c929b',
    },
    currentBalanceContainer: {
        flexDirection: 'row',
    },
    currency: {
        fontSize: 48,
        lineHeight: 59,
        color: '#c4bec3',
    },
    currentBalance: {
        fontSize: 48,
        lineHeight: 59,
        color: 'white',
    },
    plusIcon: {
        width: 18,
        height: 18,
    },
    cardManagementContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardManagementButton: {
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 14,
        gap: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flex: 1,
    },
    addNewCard: {
        fontSize: 14,
        color: 'white',
    },
    dragDownLine: {
        width: 64,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 100,
        alignSelf: 'center',
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: '#3A2636',
        paddingBottom: 32,
    },
    recentTransactionsContainer: {
        flex: 1,
        gap: 24,
        paddingHorizontal: 18,
    },
    transactionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionsTitle: {
        fontSize: 20,
        lineHeight: 24.6,
        color: '#010101',
    },
    showAll: {
        fontSize: 16,
        lineHeight: 19.7,
        color: '#5490A1',
    },
    transaction: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    transactionName: {
        color: 'black',
        fontSize: 16,
        lineHeight: 19.7,
    },
    transactionTime: {
        color: '#9c929b',
        fontSize: 16,
    },
    transactionMainInfo: {
        gap: 6,
    },
    transactionDetails: {
        flexDirection: 'row',
    },
    transactionsAmount: {
        fontSize: 20,
        lineHeight: 24.6,
    },
    transactions: {
        flex: 1,
    },
    contentContainer: {
        gap: 24,
        flexGrow: 1,
    },
    line: {
        borderWidth: 1,
        width: '90%',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 100,
    },
});
