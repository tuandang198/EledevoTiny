import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
var arrImage = []
class Tiny extends Component {
	state = {
		content: '',
		id:''
	}
	componentDidUpdate(){//4
		console.log('2');

		if(this.props.id ) {
			this.setState({
				id: this.props.id,
				content: this.props.content
			})
		}
	}
	render() {
		console.log(arrImage,'render con');
		return (
			<div>
				<button
					onClick={() => {
						this.props.addContent({content: this.state.content, arrImage: arrImage});
						this.setState({content: ""})
					}}
				>ADD</button>
				<button
					onClick={() => {
						console.log(this.state.content,'jjj');
						this.props.updateContent({content: this.state.content, id: this.state.id, arrImage: arrImage})
						this.setState({content: "",id:''})//5
						console.log('6');
					}}
				>UPDATE</button>
				<Editor
					apiKey='0zqgpbfzu28otlm67tv5hk2n05b9g1pq0378skq8djgi455c'
					value={this.state.content}
					init={{
						height: 500,
						menubar: false,
						plugins: [
							'advlist autolink lists link image charmap print preview anchor',
							'searchreplace visualblocks code fullscreen',
							'insertdatetime media table paste code help wordcount'
						],
						toolbar: 'undo redo | formatselect | ' +
							'bold italic backcolor | alignleft aligncenter ' +
							'alignright alignjustify | bullist numlist outdent indent | ' +
							'removeformat | help image',
						content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

						images_upload_handler: async function (blobInfo, success, failure) {
							var url = 'http://localhost:3004/studentImage/'
							var response;
							var form = new FormData();
							form.append('img', blobInfo.blob())
							try {
								response = await fetch(url, {
									method: 'POST',
									body: form
								})
								response = await response.json()
								console.log(response, 'kkk');
								arrImage.push(response.arrImage)
								success(response.arrImage[0])
							} catch (error) {
								failure("invalid " + response)
								return
							}
						}
					}
					}
					onEditorChange={
						(value) => {
							console.log('5');

							 this.setState({ content: value })

					 }}//3
				/>
				
			</div>
		);
	}
}

export default Tiny;