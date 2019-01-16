import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => (
	<View style={styles.spinnerStyles}>
		<ActivityIndicator
			size={props.size || 'large'}
		/>
	</View>
);

const styles = {
	spinnerStyles: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Spinner };
