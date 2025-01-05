import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel from 'react-native-reanimated-carousel';
import { sliderImages } from '../../constants';

export default function ImageSlider() {
    return (
        <View className="p-5 justify-center items-center">
            <Carousel
                loop
                width={wp(94)}
                height={hp(25)}
                autoPlay={true}
                data={sliderImages}
                layout={'parallax'}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View className="flex-1 overflow-hidden mx-2 justify-center items-center">
                        <Image
                            source={item}
                            resizeMode="cover"
                            className="h-full w-full rounded-3xl"
                        />
                    </View>
                )}
            />
        </View>
    );
}