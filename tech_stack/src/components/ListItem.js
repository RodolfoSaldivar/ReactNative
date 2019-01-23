import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentDidUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription = () => {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{flex: 1}}>
						{ library.description }
					</Text>
				</CardSection>
			);
		}
	};

	render() {
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={styles.titleStyles}>
							{ title }
						</Text>
					</CardSection>
					{ this.renderDescription() }
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyles: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = ({ selectedLibraryId }, ownProps) => {
	const expanded = selectedLibraryId === ownProps.library.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
