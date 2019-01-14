// Import libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => (
	<View>
		<Header headerText={'Albums!'} />
		<AlbumList />
	</View>
);

// Render to the device
AppRegistry.registerComponent('NativeAlbums', () => App);
