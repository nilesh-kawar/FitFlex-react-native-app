import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const DUMMY_SKELETON_DATA = new Array(8).fill(null)

export default function ExerciseListSkeleton() {
    return (
        <View>
            <FlatList
                data={DUMMY_SKELETON_DATA}
                numColumns={2}
                keyExtractor={(item, index) => `skeleton-${index}`}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => (
                    <ExerciseCardSkeleton
                        index={index}
                    />
                )}
            />
        </View>
    )
}

const ExerciseCardSkeleton = ({ index }) => {
    return (
        <View key={index}>
            <TouchableOpacity
                className="flex py-3 space-y-2"
            >
                <View style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 4
                }}>
                    <View
                        style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
                        className='rounded-[25px] bg-gray-200'
                    ></View>
                </View>
                <View style={{ height: hp(1.7) }} className=' bg-gray-200 rounded-full mt-2'></View>
            </TouchableOpacity>
        </View>
    )
}