Vue.component('post', {
	props: ["votes"],
	data: function() {
		return {
			title: 'This is a title',
			body: 'Just a little more text, nothing much though.'
		}
	},
	template: '<div class="post"><h2>{{title}}</h2><p>{{body}}</p><p>{{votes}} votes.</p></div>'
});


var app = new Vue({
	el: '#app',
	data: {
		posts: 3
	},
	computed: {
		numPosts: function() {
			var list = [];
			for (let i = 1; i <= this.posts; i++) {
				list = [...list, i]
			}
			return list;
		}
	}
});