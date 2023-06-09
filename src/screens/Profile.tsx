import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { BarChart } from 'react-native-chart-kit'
import  { FontAwesome, FontAwesome5, Feather, MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons'

const logo = require('../assets/logo3.png')

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 21, 25, 18, 19, 22]
      }
    ]
} 

const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `#ea580c`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

type Props = {
    uid: string,
    name: string,
    status: string,
    email: string,
    dateJoined: string,
    homeClub: string,
    phone: string,
    city: string,
    zip: string,
}

const Profile = (props: Props) => {
  return (
      <SafeAreaView>
        <ScrollView >
            <View className="pt-5 pl-5 pr-5">
                <View className="flex flex-row justify-between items-center pb-5">
                    <Text className="font-bold text-2xl">
                        Hello {props.name}
                    </Text>
                    <TouchableOpacity className="flex flex-row justify-center items-center">
                        <Text className="pr-2 font-semibold">Messages</Text>
                        <Feather name="message-square" size={20} color="#ea580c"/>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-row justify-between border border-neutral-300 rounded-md p-5 bg-white">
                    <Text className="">Membership Status</Text>
                    <View className="justify-center items-center flex flex-row">
                        <Text className="font-semibold pr-1">{props.status}</Text>
                        <FontAwesome
                            name="circle"
                            color="green"
                            size={12}
                        />
                    </View>
                </View>
            </View>
            <View className="pl-5 pr-5">
                <Text className="font-bold text-2xl pb-5 pt-5">
                        Check-In
                </Text>
                <View className="flex flex-col justify-center items-center border border-neutral-300 rounded-md pt-10 pb-10 bg-white">
                    <View className="border border-neutral-300 rounded-md">
                        <QRCode value={props.uid} logo={logo} size={200} logoSize={40} logoMargin={50}/>
                    </View>
                </View>
            </View>
            <View className="pt-5 pl-5 pr-5">
                <Text className="font-bold text-2xl pb-5">
                    Guests
                </Text>
                <View className="flex flex-col justify-start items-start border border-neutral-300 rounded-md bg-white">
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 w-full border-b border-neutral-300">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">John Doe</Text>
                        </View>
                        <Feather name="edit" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">Add Guest</Text>
                        </View>
                        <Entypo name="add-to-list" size={16}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="pl-5 pr-5 space-y-5">
                <Text className="font-bold text-2xl pt-5">
                        Visits
                </Text>
                <View className="flex flex-col justify-start items-start border border-neutral-300 rounded-md bg-white">
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">1/3/2023</Text>
                        </View>
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1 font-semibold">Rate</Text>
                            <MaterialIcons name="star-rate" size={17}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">1/2/2023</Text>
                        </View>
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1 font-semibold">Rate</Text>
                            <MaterialIcons name="star-rate" size={17}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-center items-center p-5 border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">Show more</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-col justify-center items-center border border-neutral-300 rounded-md pt-10 pb-10 bg-white">
                    <BarChart
                        style= {{
                            borderRadius: 16
                        }}
                        data={data}
                        width={Dimensions.get("window").width * 0.88}
                        height={220}
                        withInnerLines={false}
                        chartConfig={chartConfig}
                    />
                </View>
            </View>
            <View className="pt-5 pl-5 pr-5">
                <View className="pb-5 flex flex-row justify-between items-center">
                    <Text className="font-bold text-2xl">
                        Account Details
                    </Text>
                </View>
                <View className="flex flex-col justify-start items-start border border-neutral-300 rounded-md bg-white">
                    <View className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1">Date Joined:</Text>
                            <Text className="font-semibold">{props.dateJoined}</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1">Home Club:</Text>
                            <Text className="font-semibold">{props.homeClub}</Text>
                        </View>
                        <Feather name="edit" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1">Email:</Text>
                            <Text className="font-semibold">{props.email}</Text>
                        </View>
                        <Feather name="edit" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1">Phone:</Text>
                            <Text className="font-semibold">{props.phone}</Text>
                        </View>
                        <Feather name="edit" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1">City:</Text>
                            <Text className="font-semibold">{props.city}</Text>
                        </View>
                        <Feather name="edit" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="pr-1">Zip Code:</Text>
                            <Text className="font-semibold">{props.zip}</Text>
                        </View>
                        <Feather name="edit" size={16}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="pl-5 pr-5 pt-5 pb-10">
                <View className="pb-5 flex flex-row justify-between items-center">
                    <Text className="font-bold text-2xl">
                        Contact Us
                    </Text>
                </View>
                <View className="flex flex-col justify-start items-start border border-neutral-300 rounded-md bg-white">
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">Email Support</Text>
                        </View>
                        <MaterialCommunityIcons name="email" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">Phone Support</Text>
                        </View>
                        <MaterialCommunityIcons name="phone" size={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">Facebook</Text>
                        </View>
                        <MaterialCommunityIcons name="facebook" size={16} color="#2563eb"/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 border-b border-neutral-300 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">Instagram</Text>
                        </View>
                        <MaterialCommunityIcons name="instagram" size={16} color="#ea580c"/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between items-center p-5 w-full">
                        <View className="flex flex-row justify-center items-center">
                            <Text className="font-semibold">TikTok</Text>
                        </View>
                        <FontAwesome5 name="tiktok" size={16}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default Profile