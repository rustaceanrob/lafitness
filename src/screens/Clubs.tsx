import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import ClubTile from '../components/ClubTile'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {}

const Clubs = (props: Props) => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View className="pb-10">
                <View className="p-2 pl-5 pr-5">
                    <View className="flex flex-row justify-between items-center border border-neutral-300 rounded-md bg-white p-5">
                        <TextInput className="text-md" placeholder='Search by name, address, or zip code'></TextInput>
                        <Ionicons name="md-search-circle-outline" size={20}/>
                    </View>
                </View>
                <ClubTile address="1234 Poway Rd, Poway, CA"
                        name="Poway Fitness Center"
                        features={[
                            <MaterialCommunityIcons name="weight-lifter" size={18}/>,
                            <Ionicons name="bicycle" size={18}/>,
                            <MaterialCommunityIcons name="human-female-dance" size={18}/>,
                            <MaterialCommunityIcons name="yoga" size={18}/>,
                            <MaterialCommunityIcons name="basketball" size={18}/>,
                            <MaterialCommunityIcons name="swim" size={19}/>
                        ]}
                        milesAway='2.3'
                />
                <ClubTile address="12223 Camino Del Norte, San Diego, CA"
                        name="Mira Mesa"
                        features={[
                            <MaterialCommunityIcons name="weight-lifter" size={18}/>,
                            <Ionicons name="bicycle" size={18}/>,
                            <MaterialCommunityIcons name="basketball" size={18}/>,
                            <MaterialCommunityIcons name="swim" size={19}/>
                        ]}
                        milesAway='5.9'
                />
                <ClubTile address="4321 Del Mar Heights Rd, San Diego, CA"
                        name="Del Mar"
                        features={[
                            <MaterialCommunityIcons name="weight-lifter" size={18}/>,
                            <Ionicons name="bicycle" size={18}/>,
                            <MaterialCommunityIcons name="human-female-dance" size={18}/>,
                            <MaterialCommunityIcons name="yoga" size={18}/>,
                        ]}
                        milesAway='12.4'
                />
                <View className="justify-center items-center pl-20 pr-20 pt-5">
                    <TouchableOpacity className="px-2 py-2 border border-neutral-300 rounded-md w-full justify-center items-center bg-white">
                        <Text className="font-semibold">Show more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Clubs