import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = {
		albums: []
	}

	async componentWillMount() {
		const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
		this.setState({ albums: response.data });
	}

	renderAlbums = () => (
		this.state.albums.map((album) => (
			<AlbumDetail key={album.title} album={album} />
		))
	)

	render() {
		console.log(this.state.albums);
		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		);
	}
}

export default AlbumList;
