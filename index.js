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

var image = {
	props: ['url', 'text', 'dims'],
	template: '<div><img :src="url" :alt="text" :width="dims[0]" :height="dims[1]"/></div>'
}


var app = new Vue({
	el: '#app',
	components: {
		'custom-picture': image
	}
});