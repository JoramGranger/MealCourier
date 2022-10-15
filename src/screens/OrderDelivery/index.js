import { useRef, useState,useMemo, useEffect } from "react";
import { View, Text, FlatList, Dimensions, useWindowDimensions, ActivityIndicator } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto, Entypo, MaterialIcons } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json';
import styles from './styles';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from "react-native-maps-directions";

// AIzaSyDYj8QLP7gEVH2SchTLYZ0VkjQzC9teRBY

const order = orders[0];


const OrderDelivery = () => {

    const [driverLocation, setDriverLocation] = useState(null);
    const [totalMinutes, setTotalMinutes] = useState(0);
    const [totalKm, setTotalKm] = useState(0);

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["12%", "95%"], []);
    const { width, height } = useWindowDimensions();

    

    useEffect(() => {
        /* const getDeliveryLocations =  */(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(!status === 'granted') {
                console.warn('Nah');
                return;
            }
            let location = await Location.getCurrentPositionAsync();
            setDriverLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        })
        /* getDeliveryLocations */();
    }, []);

    if(!driverLocation) {
        return <ActivityIndicator size={"large"} />
    }

    return ( 
        <View style={styles.container}>
            <MapView style={{width, height}}
                showsUserLocation
                followsUserLocation
                initialRegion={{
                    latitude: driverLocation.latitude,
                    longitude: driverLocation.longitude,
                    latitudeDelta: 0.07,
                    longitudeDelta: 0.07,
                }}
            >
                <MapViewDirections 
                    origin={driverLocation}
                    destination={{latitude: order.User.lat, longitude: order.User.lng}}
                    strokeWidth={10}
                    waypoints={[{latitude: order.Restaurant.lat, longitude: order.Restaurant.lng}]}
                    strokeColor="#3fc060"
                    apikey={"AIzaSyDYj8QLP7gEVH2SchTLYZ0VkjQzC9teRBY"}
                    onReady={(result) => { 
                        setTotalMinutes(result.duration);
                        setTotalKm(result.distance);
                    }}
                />
                <Marker
                coordinate={{latitude: order.Restaurant.lat, longitude: order.Restaurant.lng}}
                title={order.Restaurant.name}
                description={order.Restaurant.address}
                >
                    <View style={{backgroundColor: 'green', padding: 5, borderRadius: 20}}>
                        <Entypo name="shop" size={30} color="white"/>
                    </View>                    
                </Marker>
                <Marker
                coordinate={{latitude: order.User.lat, longitude: order.User.lng}}
                title={order.User.name}
                description={order.User.address}
                > 
                    <View style={{backgroundColor: 'green', padding: 5, borderRadius: 20}}>
                        <MaterialIcons name="restaurant" size={30} color="white"/>
                    </View>                   
                </Marker>
            </MapView>
            <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={snapPoints}
            handleIndicatorStyle={styles.handleIndicator}
            >
                <View style={styles.handleIndicatorContainer}>
                    <Text style={styles.routeDetailsText}>{totalMinutes.toFixed(0)} Mins</Text>
                    <FontAwesome5 name="shopping-bag" size={30} color="#3fc060" style={{
                        marginHorizontal: 10
                    }}/>
                    <Text style={styles.routeDetailsText}>{totalKm.toFixed(2)}Km</Text>
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