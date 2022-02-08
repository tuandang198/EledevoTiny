import React, { Component } from 'react';
import Tiny from '../components/Tiny'

class contentComponent extends Component {
	state={
		content: '',
		id: ""
	}
	//1
	componentDidUpdate(){//6
		console.log('3');
		console.log(this.state.id,'state id');
		if (this.state.id) {
			this.setState({id: ''})
		}
	}
	render() {
		console.log('render cha');

		let listData = []
		if(this.props.content) {
			listData = this.props.content.map((item, index) => {
				return (
					<tr key={index}>
						<th>{index+1}</th>
						<th dangerouslySetInnerHTML={{__html: item.content}}/>
						<th>
							<button
							onClick={() => this.props.deleteContent({id: item._id})}
							>DELETE</button>
						</th>
						<th>
							<button
							onClick={() => {
								this.setState({id: item._id, content: item.content})
								console.log('4');
							}}//1
							>Choose</button>
						</th>
					</tr>
				)
			})
		}
		return (
			<div>
				<table>
					<tbody>
						{listData}
					</tbody>
				</table>
				<Tiny 
					addContent={this.props.addContent}
					updateContent={this.props.updateContent}
					content={this.state.content}
					id={this.state.id}//2
				/>
			</div>
		);
	}
}

export default contentComponent;