var post = Vue.component('post', {
	data: function() {
		return {
			title: 'This is a title',
			body: 'Just a little more text, nothing much though.'
		}
	},
	template: '<div class="post"><h2>{{title}}</h2><p>{{body}}</p>'
});


var app = new Vue({
	el: '#app',
	data: {
		name: "",
	},
	computed: {
		valid: function() {
			return this.name != '';
		}
	}
});