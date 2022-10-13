import { View, Text } from 'react-native';
import { useRef, useState,useMemo } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5 } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json';

const order = orders[0];


const OrderDelivery = () => {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["12%", "95%"], [])

    return ( 
        <View style={{backgroundColor: 'lightgrey', flex: 1}}>
            <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={snapPoints}
            handleIndicatorStyle={{backgroundColor: "black", width: 100}}
            >
                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 25, letterSpacing: 1}}>14 min</Text>
                    <FontAwesome5 name="shopping-bag" size={30} color="#3fc060" style={{
                        marginHorizontal: 10
                    }}/>
                    <Text style={{fontSize: 25, letterSpacing: 1}}>5 km</Text>
                </View>

                <View style={{paddingHorizontal: 20}}>
                    <Text style={{fontSize: 25, letterSpacing: 1, paddingVertical: 20}}>{order.Restaurant.name}</Text> 
                    <Text style={{fontSize: 20, color: 'grey', fontWeight: '500', letterSpacing: 1}}>{order.Restaurant.address}</Text> 
                    <Text style={{fontSize: 20, color: 'grey', fontWeight: '500', letterSpacing: 1}}>{order.User.address}</Text>
                    <View style={{borderTopWidth: 1, borderColor: 'lightgrey'}}>
                        <Text>Onion Rings x1</Text> 
                        <Text>Chicken Drum x1</Text> 
                        <Text>Chapat x3</Text> 
                    <Text>Coca Cola coke x2</Text> 
                </View>
                </View>

                
            </BottomSheet>
        </View>
     );
}
 
export default OrderDelivery;