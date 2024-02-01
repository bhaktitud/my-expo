import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

// data from API
const section_2 = [
    {
        product_name: 'lampu',
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_name: 'meja',
        url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_name: 'kursi',
        url: 'https://images.unsplash.com/photo-1635107510862-53886e926b74?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_name: 'kompor',
        url: 'https://images.unsplash.com/photo-1544435253-f0ead49638fa?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const section_3 = [
    {
        price: 20000,
        description: '89 sold',
        product_name: 'lampu',
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        price: 23000,
        description: 'Only 2 Stocks',
        product_name: 'meja',
        url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        price: 56000,
        description: '9 sold',
        product_name: 'kursi',
        url: 'https://images.unsplash.com/photo-1635107510862-53886e926b74?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        price: 10000,
        description: 'Limited',
        product_name: 'kompor',
        url: 'https://images.unsplash.com/photo-1544435253-f0ead49638fa?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

function Section3() {
    return (
                <ImageBackground
                    style={{
                        width: '100%',
                        marginVertical: 16,
                        paddingVertical: 4
                    }}
                    source={{uri: 'https://images.unsplash.com/photo-1683009427590-dd987135e66c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 16,
                            marginBottom: 16
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: '#A47E7E'
                            }}
                        >
                            FLASH SALE
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: '#A47E7E'
                            }}
                        >
                            View All
                        </Text>
                    </View>
                    <View>
                        <FlatList 
                            data={section_3}
                            renderItem={({item, index}) => (
                                <View key={index} style={{marginHorizontal: 14}}>
                                    <Image 
                                        source={{uri: item.url}}
                                        style={{
                                            width: 180,
                                            height: 180,
                                            borderRadius: 8
                                        }}
                                        resizeMethod='auto'
                                        resizeMode='cover'
                                    />
                                    <View
                                        style={{
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: "800",
                                                color: '#A47E7E'
                                            }}
                                        >
                                            Rp{item.price}
                                        </Text>
                                        <View
                                            style={{
                                                backgroundColor: '#A47E7E',
                                                paddingVertical: 4,
                                                alignItems: 'center',
                                                borderRadius: 100,
                                                width: 100
                                            }}
                                        >
                                            <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: "800",
                                                color: '#FFF'
                                            }}
                                            >
                                                {item.description}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </ImageBackground>
    )
}

function Section2() {
    return(
        <View
                style={{
                    width: '100%',
                    marginVertical: 16
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 16,
                        marginBottom: 16
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: '#A47E7E'
                        }}
                    >
                        Reviews
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: '#A47E7E'
                        }}
                    >
                        View All
                    </Text>
                </View>
                <View>
                    <FlatList 
                        data={section_2}
                        renderItem={({item, index}) => (
                            <View key={index} style={{marginHorizontal: 14}}>
                                <Image 
                                    source={{uri: item.url}}
                                    style={{
                                        width: 180,
                                        height: 280,
                                        borderRadius: 8
                                    }}
                                    resizeMethod='auto'
                                    resizeMode='cover'
                                />
                            </View>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
        </View>
    )
}


export default function HomePage() {

  return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView>
                <View
                    style={{
                        backgroundColor: 'gray',
                        width: '100%',
                        height: 300
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginTop: 120
                        }}
                    >
                        {
                            Array(8).fill("").map((item, index) => (
                                <View
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 12,
                                        backgroundColor: 'red'
                                    }}
                                >
                                    <Text>{index}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>

                { Section2() }

                { Section3() }

                <View
                    style={{
                        backgroundColor: 'yellow',
                        width: '100%',
                        height: 300
                    }}
                >
                    <Text>Section 4</Text>
                </View>
            </ScrollView>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
