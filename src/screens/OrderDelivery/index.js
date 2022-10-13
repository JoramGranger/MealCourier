import { View, Text } from 'react-native';
import { useRef, useState,useMemo } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json';
import styles from './styles';

const order = orders[0];


const OrderDelivery = () => {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["12%", "95%"], [])

    return ( 
        <View style={styles.container}>
            <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={snapPoints}
            handleIndicatorStyle={styles.handleIndicator}
            >
                <View style={styles.handleIndicatorContainer}>
                    <Text style={styles.routeDetailsText}>14 min</Text>
                    <FontAwesome5 name="shopping-bag" size={30} color="#3fc060" style={{
                        marginHorizontal: 10
                    }}/>
                    <Text style={styles.routeDetailsText}>5 km</Text>
                </View>

                <View style={styles.orderDeilveryDetailsContainer}>
                    <Text style={styles.restaurantName}>{order.Restaurant.name}</Text> 
                    <View style={styles.addressContainer}>
                        <Fontisto name="shopping-store" size={22} color="grey" />
                        <Text style={styles.addressText}>{order.Restaurant.address}</Text>                         
                    </View>
                    <View style={styles.addressContainer}>
                        <FontAwesome5 name="map-marker-alt" size={30} color="grey" />
                        <Text style={styles.addressText}>{order.User.address}</Text>                                               
                    </View>
                    
                    <View style={styles.orderDetailsContainer}>
                        <Text style={styles.orderItemText}>Onion Rings x1</Text> 
                        <Text style={styles.orderItemText}>Chicken Drum x1</Text>
                        <Text style={styles.orderItemText}>Chapat x3</Text> 
                        <Text style={styles.orderItemText}>Coca Cola coke x2</Text> 
                </View>
                </View>
                <View style={{backgroundColor: "#3fc060", marginTop: 'auto', marginVertical: 30, marginHorizontal: 10, borderRadius: 10}}>
                    <Text style={{color: 'white', paddingVertical: 15, fontSize: 25, fontWeight: '500', textAlign: 'center', letterSpacing: 0.5}}>Accept Order</Text>
                </View>

                
            </BottomSheet>
        </View>
     );
}
 
export default OrderDelivery;