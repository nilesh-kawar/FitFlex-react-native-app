import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyParts() {
  const router = useRouter()
  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
        Excersice
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <BodyPartsCard
            index={index}
            item={item}
            router={router}
          />
        )}
      />
    </View>
  )
}

const BodyPartsCard = ({ item, index, router }) => {
  return (
    <Animated.View key={index} entering={FadeInDown.duration(400).delay(index*200).springify()}>
      <TouchableOpacity
        onPress={() => router.push({ pathname: '/exercises', params: item })}
        style={{ height: wp(52), width: wp(44) }}
        className="flex justify-end p-4 mb-4">
        <Image
          source={item.image}
          resizeMode='cover'
          style={{ height: wp(52), width: wp(44) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{ height: hp(15), width: wp(44), borderRadius: 35 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <Text style={{ fontSize: hp(2.3) }} className="text-white font-semibold text-center tracking-wide capitalize">{item.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}