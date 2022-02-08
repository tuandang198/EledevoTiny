import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import Content from '../components/contentComponent'

function mapStateToProps(state) {
	return {
		content: state.contentReducer.listItem
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getContent : (payload)=>{
			dispatch(actions.getContentRequest(payload))
		},
		addContent : (payload)=>{
			dispatch(actions.addContentRequest(payload))
		},
		updateContent : (payload)=>{
			dispatch(actions.updateContentRequest(payload))
		},
		deleteContent : (payload)=>{
			dispatch(actions.deleteContentRequest(payload))
		}
	};
}

class container extends Component {
	componentDidMount() {
		console.log('1');
		this.props.getContent()
	}
	render() {//1 
		console.log('render');

		return (
			<div>
				<Content {...this.props}/>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,mapDispatchToProps
)(container);