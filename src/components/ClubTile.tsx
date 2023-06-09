import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
    address: string,
    name: string,
    features: any[],
    milesAway: string,
}

const ClubTile = (props: Props) => {
  return (
    <View className="p-5">
      <TouchableOpacity className="border border-neutral-300 rounded-md bg-white">
        <View className="flex flex-col p-5">
            <View className="flex flex-row justify-between items-center">
                <Text className="font-bold text-lg">{props.name}</Text>
                <View className="flex flex-row justify-center items-center">
                    <Text className="pr">{props.milesAway} miles</Text>
                    <Entypo name="direction" size={15}/>   
                </View>
            </View>
            <View className="justify-start items-start">
                <Text className="text-xs text-neutral-600">{props.address}</Text>
            </View>
            <View className="border-b border-neutral-300 pt-4 flex-row space-x-2 pb-4">
                {props.features.map((feature) =>{
                    return feature
                })}
            </View>
            <View className="flex flex-row justify-between items-center pt-5">
                <TouchableOpacity className="flex flex-row justify-center items-center border border-neutral-300 rounded-md px-2 py-2">
                    <AntDesign name="apple1"/>
                    <Text className="pl-2">
                        Maps
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row justify-center items-center border border-neutral-300 rounded-md px-2 py-2">
                    <AntDesign name="google"/>
                    <Text className="pl-2">
                        Maps
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row justify-center items-center border border-neutral-300 rounded-md px-2 py-2">
                    <MaterialCommunityIcons name="waze" size={15}/>
                    <Text className="pl-2">
                        Waze
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ClubTile