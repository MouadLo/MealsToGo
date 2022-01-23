import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	StatusBar,
	Text,
	View,
	SafeAreaView,
	Platform,
} from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View
					style={{
						backgroundColor: 'green',
						padding: 16,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text>Search</Text>
				</View>
				<View
					style={{
						flex: 1,
						backgroundColor: 'red',
						padding: 16,
					}}
				>
					<Text>Item List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
});
