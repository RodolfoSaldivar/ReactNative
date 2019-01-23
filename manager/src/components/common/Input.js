import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => (
	<View style={styles.containerStyles}>
		<Text style={styles.labelStyles}>
			{ props.label }
		</Text>
		<TextInput
			autoCorrect={false}
			placeholder={props.placeholder}
			secureTextEntry={props.secureTextEntry}
			style={styles.inputStyles}
			value={props.value}
			onChangeText={props.onChangeText}
		/>
	</View>
);

const styles = {
	inputStyles: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyles: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyles: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
