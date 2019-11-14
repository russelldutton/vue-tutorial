let vue = new Vue({
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