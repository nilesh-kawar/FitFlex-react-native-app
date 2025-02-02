import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function AiWorkout() {
    return (
        <TouchableOpacity
            onPress={() => router.push('ai-workout')}
        >
            <View className="mx-4">
                <View className='flex-row items-center mb-3 py-3  rounded-2xl bg-purple-500'>
                    {/* <LinearGradient
                    colors={['#440fd5', '#fa00ec']}
                    style={{ height: hp(13), borderRadius: 16 }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0 w-full"
                /> */}
                    <View className='flex items-center justify-center' style={{ width: wp(20), height: wp(20) }}>
                        <Image
                            style={{ width: wp(14), height: wp(14) }}
                            source={require('../../assets/images/ai_workout_icon.png')}
                        />
                    </View>
                    <View className='flex-1 ml-3'>
                        <Text
                            className='font-semibold tracking-wide text-white'
                            style={{ fontSize: hp(2.5) }}>
                            AI Workout Builder
                        </Text>
                        <Text className='text-wrap text-white'>
                            A personalized workout plan tailored to your goals!
                        </Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}