import { Text, View, StyleSheet } from 'react-native';

function GameScreen(){
    return (
        <View style={styles.screen}>
            <Text>Opponet's Guess!</Text>
            {/* GUESS */}
            <View>
                <Text>Higher or lower?</Text>
                {/* - + */}
            </View>
            {/* <View>LOG ROUDS</View> */}
        </View>


    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})