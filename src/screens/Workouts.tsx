import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import QRCode from 'react-native-qrcode-svg'
import WorkoutTile from '../components/WorkoutTile'
const logo = require('../assets/logo3.png')

type Props = {}

const Workouts = (props: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible)
            }}>
                <View className="flex-1 justify-center items-center">
                    <View className="bg-white justify-center items-center p-10">
                        <Text className="font-bold text-2xl pb-10">
                            Enjoy your workout!
                        </Text>
                        <View className="justify-center items-center">
                            <QRCode value={"sdfkjsdklfgjklsdfjgklsdfjsdfhsdjkgfhjksdfhgjkdfshgjk"} logo={logo} size={200} logoSize={40} logoMargin={50}/>
                        </View>
                        <TouchableOpacity className="flex flex-row justify-center items-center pt-10" onPress={() => setModalVisible(!modalVisible)}>
                            <Text className="font-bold pr-1">Dismiss</Text>
                            <Ionicons name="ios-close-circle" size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
        <ScrollView>
            <View className="pb-10">
                <Text className="font-bold text-2xl pl-6 pt-5">
                    Classes
                </Text>
                <WorkoutTile sourcePath={require('../assets/personaltrainer.jpg')} name="Personal Training" icon={<MaterialCommunityIcons name="weight-lifter" size={18} color="#0ea5e9"/>} time="60 Minutes" intensity='High Intensity' intensityIcon={<MaterialCommunityIcons name="thermometer-high" size={15} color="#ea580c"/>}/>
                <WorkoutTile sourcePath={require('../assets/cycling3.jpg')} name="Cycling" icon={<Ionicons name="bicycle" size={18} color="#0ea5e9"/>} time="45 Minutes" intensity='High Intensity' intensityIcon={<MaterialCommunityIcons name="thermometer-high" size={15} color="#ea580c"/>}/>
                <WorkoutTile sourcePath={require('../assets/dance.jpg')} name="Dancing" icon={<MaterialCommunityIcons name="human-female-dance" size={18} color="#0ea5e9"/>} time="60 Minutes" intensity='High Intensity' intensityIcon={<MaterialCommunityIcons name="thermometer-high" size={15} color="#ea580c"/>}/>
                <WorkoutTile sourcePath={require('../assets/yoga.jpg')} name="Yoga" icon={<MaterialCommunityIcons name="yoga" size={18} color="#0ea5e9"/>} time="60 Minutes" intensity='Low Intensity' intensityIcon={<MaterialCommunityIcons name="thermometer-low" size={15} color="#0ea5e9"/>}/>
                <WorkoutTile sourcePath={require('../assets/pool.jpg')} name="Swimming" icon={<MaterialCommunityIcons name="swim" size={19} color="#0ea5e9"/>} time="30 Minutes" intensity='High Intensity' intensityIcon={<MaterialCommunityIcons name="thermometer-high" size={15} color="#ea580c"/>}/>
                <TouchableOpacity className="justify-center items-center pl-5 pr-5" onPress={() => setModalVisible(true)}>
                    <View className="flex flex-row justify-center items-center border border-neutral-300 rounded-md p-5 bg-white w-full">
                        <Text className="font-bold text-lg pr-2">Check In</Text>
                        <MaterialCommunityIcons name="qrcode-scan" size={20}/> 
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Workouts