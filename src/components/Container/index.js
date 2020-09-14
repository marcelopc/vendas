import React, { Children } from 'react';
import { View, Text } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

const styles = {

}

export default function Home({mount, unmount, children}) {

    useFocusEffect(
        React.useCallback(() => {
            if(mount){
                mount();
            }
          // Do something when the screen is focused
          return () => {
            if(unmount)
                unmount();
          };
        }, [])
      );

    return (
        <View>
            {children}
        </View>
    );
}