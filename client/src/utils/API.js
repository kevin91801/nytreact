import axios from "axios";

export default {

	getArticles: function() {
		return axios.get("/api/saved");
	},

	saveArticle: function(articleData) {
		return axios.post("/api/saved", articleData);
	}
};