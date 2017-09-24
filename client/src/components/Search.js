import React from "react";

const Search = props =>
	<form>
		<div className="form-group">
			<label htmlFor="search">Title:</label>
			<input
				onChange={props.handleInputChange
				value={props.value}
				name="search"
				type="text"
				className="form-control"
				placeholder="Search for a Article"
				id="search"
			/>
			<br />
			<input
				onChange={props.handleInputChange
				value={props.value}
				name="search"
				type="text"
				className="form-control"
				id="StartYear"
			/>
			<br />
			<input
				onChange={props.handleInputChange
				value={props.value}
				name="search"
				type="text"
				className="form-control"
				id="EndYear"
			/>
			<br />
			<button onClick={props.handleFormSubmit} className="btn btn-primary">
        	Search
      		</button>