// import { Slot } from "expo-router";

// // Import your global CSS file

// export default Slot;
import React from "react";
import "../global.css";
import { Stack } from "expo-router";

export default function _layout() {
    return (
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="exercises"
          options={{
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="exerciseDetails"
          options={{
            presentation: "transparentModal",
          }}
        />
      </Stack>
    );
}
