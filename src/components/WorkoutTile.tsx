import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

type Props = {
    sourcePath: any,
    name: string
    icon: any,
    intensityIcon: any,
    time: string,
    intensity: string,
}

const win = Dimensions.get('window')
const wid = win.width * 0.89

const WorkoutTile = (props: Props) => {

    return (
        <TouchableOpacity className="w-full items-center justify-center pt-5 pb-5">
            <View className="flex flex-col justify-center items-center">
                <View className="border border-neutral-300 rounded-md bg-white">
                    <View className="flex flex-row justify-between items-center">
                        <View className="p-5 flex flex-row justify-center items-center">
                            <Text className="font-bold text-md pr-2">{props.name}</Text>
                            {props.icon}
                        </View>
                        <View className="p-5 flex flex-row justify-center items-center">
                            <Text className="font-bold text-md pr-2">Schedule</Text>
                            <Feather name="calendar" size={20}/>
                        </View>
                    </View>
                    <Image resizeMode='cover' style={styles.image} source={props.sourcePath}></Image>
                    <View className="flex flex-row justify-between items-center">
                        <View className="p-5 flex flex-row items-center justify-start">
                            <Text className="font-semibold pr-1">{props.time}</Text>
                            <Entypo name="time-slot" size={15}/>
                        </View>
                        <View className="p-5 flex flex-row items-center justify-start">
                            <Text className="font-semibold pr-1">{props.intensity}</Text>
                            {props.intensityIcon}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
      width: wid,
      height: 250,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export default WorkoutTile