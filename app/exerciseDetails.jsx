import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import Anticons from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function exerciseDetails() {
    const router = useRouter();
    const item = useLocalSearchParams();

    return (
        <View
            style={{
                height: hp(90),
                width: wp(100)
            }}
            className='absolute bottom-0 bg-neutral-200 rounded-t-[25px]'>

            {/* Image  */}
            <View className='shadow-2xl'>
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit='cover'
                    style={{
                        width: wp(100),
                        height: wp(100),
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        borderBottomLeftRadius: 40, borderBottomRightRadius: 40
                    }}
                />
            </View>

            {/* Close icon  */}
            <TouchableOpacity
                onPress={() => router.back()}
                className='mx-2 absolute rounded-full mt-2 right-0'
            >
                <Anticons
                    name='closecircle'
                    size={hp(4.5)}
                    color="#f43f5e"
                />
            </TouchableOpacity>

            {/* Details  */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                className="mx-4 space-y-2 mt-3"
            >
                <Animated.Text
                    entering={FadeInDown.duration(300).springify()}
                    style={{ fontSize: hp(3) }}
                    className="font-semibold text-neutral-800 capitalize tracking-wide"
                >
                    {item.name}
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(100).duration(100).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide mt-2"
                >
                    Equipment <Text className='font-bold text-neutral-800'>{item?.equipment}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(100).duration(100).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide"
                >
                    Secondary Muscles <Text className='font-bold text-neutral-800'>{item?.secondaryMuscles}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(300).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide"
                >
                    Target <Text className='font-bold text-neutral-800'>{item?.target}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(400).duration(300).springify()}
                    style={{ fontSize: hp(2.5) }}
                    className="mt-2 font-semibold text-neutral-800 capitalize tracking-wide"
                >
                    Instructions
                </Animated.Text>

                {
                    item.instructions.split(',').map((instruction, index) => {
                        return (
                            <Animated.Text
                                entering={FadeInDown.delay((index + 6) * 100).duration(300).springify()}
                                key={index}
                                style={{ fontSize: hp(1.7) }}
                                className='text-neutral-800'
                            >
                                {instruction}
                            </Animated.Text>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}