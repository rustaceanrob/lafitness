import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {}

const Resources = (props: Props) => {
  return (
    <SafeAreaView>
        <ScrollView >
            <View className="pt-5 pl-5 pr-5">
                <View className="flex flex-row justify-between items-center pb-5">
                    <Text className="font-bold text-2xl">
                        Find Amenities
                    </Text>
                    <FontAwesome name="location-arrow" size={20}/>
                </View>
                <View className="flex flex-col justify-start items-start border border-neutral-300 rounded-md bg-white">
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Physical Therapy</Text>
                        </View>
                        <Feather name="calendar" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Fitness Consultation</Text>
                        </View>
                        <Feather name="calendar" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Training Session</Text>
                        </View>
                        <Feather name="calendar" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Sauna</Text>
                        </View>
                        <FontAwesome name="location-arrow" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Swimming Pool</Text>
                        </View>
                        <FontAwesome name="location-arrow" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Basketball Court</Text>
                        </View>
                        <FontAwesome name="location-arrow" size={16}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="pt-5 pl-5 pr-5 pb-5">
                <View className="flex flex-row justify-between items-center pb-5">
                    <Text className="font-bold text-2xl">
                        Shop
                    </Text>
                    <FontAwesome name="shopping-cart" size={20}/>
                </View>
                <View className="flex flex-col justify-start items-start border border-neutral-300 rounded-md bg-white">
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Gear</Text>
                        </View>
                        <Ionicons name="exit-outline" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Supplements</Text>
                        </View>
                        <MaterialCommunityIcons name="pill" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold pr-1">Merchandise</Text>
                        </View>
                        <Ionicons name="shirt" size={16}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Resources