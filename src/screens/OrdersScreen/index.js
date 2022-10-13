import { useRef, useState,useMemo } from "react";
import { View, Text, FlatList, Dimensions, useWindowDimensions } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import orders from '../../../assets/data/orders.json'
import OrderItem from "../../components/OrderItem";
import MapView, { Marker } from 'react-native-maps';

const OrdersScreen = () => {

    const bottomSheetRef = useRef(null);
    const { width, height } = useWindowDimensions();
    const snapPoints = useMemo(() => ["12%", "95%"], [])


    return ( 
        <View style={{backgroundColor: 'lightgrey', flex: 1}}>
            <MapView style={{height, width }} 
            showsUserLocation 
            followsUserLocation>
                <Marker title={"Hello"} description={"World"} coordinate={{
                    latitude: 0.33269189677168887,
                    longitude: 32.562467535311924,
                }}/>
            </MapView>
            <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={snapPoints}
            >                
                <View style={{flex: 1, alignItems: 'center'}}>
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
                    
                </View>
                <FlatList data={orders} renderItem={({item}) => <OrderItem order={item} /> }/>
            </BottomSheet> 
        </View>           
       
     );
}
 
export default OrdersScreen;