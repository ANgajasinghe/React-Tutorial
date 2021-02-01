import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			comments: '',
			topic: 'react'
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			comments: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { username, comments, topic } = this.state
		return (
			<form class='' onSubmit={this.handleSubmit}>
				<div>
					<label>Username </label>
					<input
                     class="form-control"
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
                     class="form-control"
						value={comments}
						onChange={this.handleCommentsChange}
					/>
				</div>
				<div>
					<label>Topic</label>
					<select  class="form-control" value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button class="mt-2 btn btn-primary" type="submit">Submit</button>
			</form>
		)
	}
}

export default Form