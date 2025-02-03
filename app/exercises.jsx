import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodyPart } from "../api/exerciseDb";
import { IS_DEV } from "../constants";
import backWorkoutMock from '../mock/back-workouts.json'
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';
import ExerciseList from '../components/ExerciseList/ExerciseList';
import ExerciseListSkeleton from '../components/ExerciseList/ExerciseListSkeleton';

export default function exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();

    const [exercises, setExercises] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (item) {
            // Just to show skeleton 
            setTimeout(() => {
                setLoading(false)
            }, 500);
            if (IS_DEV) {
                setExercises(backWorkoutMock);
            } else {
                getExercises(item.name);
            }
        }
    }, [item])

    const getExercises = async (bodyPart) => {
        let data = await fetchExercisesByBodyPart(bodyPart);
        if (JSON.stringify(data) !== JSON.stringify(exercises)) {
            setExercises(data);  // Only update if data is actually different
        }
    }
    
    return (
        <View>
            <StatusBar style="light" />
            <Image
                source={item.image}
                style={{ width: wp(100), height: hp(45) }}
                className="rounded-b-[40px]"
            />
            <TouchableOpacity
                onPress={() => router.back()}
                className="bg-rose-500 mx-auto absolute rounded-full justify-center items-center pr-1 ml-3"
                style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
            >
                <Ionicons
                    name="caret-back-outline"
                    size={hp(4)}
                    color="white"
                />
            </TouchableOpacity>
            {/* exercises  */}
            <View className="mx-4 space-y-3 mt-4">
                <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700 capitalize">
                    {item.name} exercises
                </Text>
                <View className="mb-10">
                    {loading ? <ExerciseListSkeleton /> : <ExerciseList data={exercises} />}
                </View>
            </View>
        </View>
    )
}