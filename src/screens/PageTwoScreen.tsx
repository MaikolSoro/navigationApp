import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

import { useNavigation } from '@react-navigation/native';

export const PageTwoScreen = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina2 screen</Text>

            <Button
                title="Ir a la página 3"
                onPress={() => navigator.navigate('PageTreeScreen')}
            />
        </View>
    )
}
