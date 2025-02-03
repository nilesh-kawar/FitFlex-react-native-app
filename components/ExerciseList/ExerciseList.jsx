import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'
export default function ExerciseList({ data }) {
    const router = useRouter()
    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => (
                    <ExerciseCard
                        index={index}
                        item={item}
                        router={router}
                    />
                )}
            />
        </View>
    )
}
const ExerciseCard = ({ item, index, router }) => {
    return (
        <Animated.View key={index} entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({ pathname: '/exerciseDetails', params: item })}
                className="flex py-3 space-y-2"
            >
                <View className='shadow-2xl'>
                    <Image
                        source={{ uri: item.gifUrl }}
                        contentFit='cover'
                        style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
                        className='rounded-[25px]'
                    />
                </View>
                <Text
                    className='capitalize text-neutral-700 font-semibold ml-1 tracking-wide'
                    style={{ fontSize: hp(1.7) }}
                >
                    {item.name.length > 20 ? item.name.substring(0, 20) + '...' : item.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}