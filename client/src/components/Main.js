import React, { Component } from "react";
import Results from "./Result";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Panels } from "./Panels";
import { Results } from "./Results";
import Search from "./Search";

class Article extends Component {
	state = {
		articles: [],
		title: "",
		url: ""
	};

	componentDidMount() {
			this.loadArticles();
		}

	loadArticles = () => {

		API.getArticles()
			.then(res =>
				this.setState({ articles: res.data, title: "", url: "" })
			)
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		this.searchArticles(this.state.search);
	};

	render() {

		return (
			<div className="container">
				<div className="jumbotron">
					<h1><strong>New York Times Search</strong></h1>
				</div>
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body">
						<Search
							value={this.state.search}
							handleInputChange={this.handleInputChange}
							handleFormSubmit={this.handleFormSubmit}
						/>
					</div>
				</div>
				<br />
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body">
						{Results /}
					</div>

				</div>
				<br />
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Saved Articles</h3>
					</div>
					<div className="panel-body">
						{Saved /}
					</div>

				</div>





			</div>	
			   )
			}	
}