import { useRef, useState,useMemo } from "react";
import { View, Text, FlatList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import orders from '../../../assets/data/orders.json'
import OrderItem from "../../components/OrderItem";

const OrdersScreen = () => {

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["12%", "95%"], [])

    return ( 
        <View style={{backgroundColor: 'lightgrey', flex: 1}}>
            <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={snapPoints}
            >
                
                <View style={{flex: 1}}>
                    <Text style={{
                        fontSize: 20, 
                        fontWeight: '600', 
                        letterSpacing: 0.5,
                        paddingBottom: 5
                        }}>You're Online
                    </Text>

                    <Text style={{
                        letterSpacing: 0.5, color: 'grey'
                        }}>Available Orders: {orders.length}
                    </Text>
                    <FlatList data={orders} renderItem={({item}) => <OrderItem order={item} /> }/>
                </View>
            </BottomSheet> 
        </View>           
       
     );
}
 
export default OrdersScreen;