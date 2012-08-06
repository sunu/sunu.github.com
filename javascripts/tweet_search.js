(function($) {
	var o = $( {} );

	$.each({
		on: 'subscribe',
		trigger: 'publish',
		off: 'unsubscribe'
	}, function( key, api ) {
		$[api] = function() {
			o[key].apply( o, arguments );
		}
	});

})(jQuery);

(function($) {

	var Twitter ={
			init: function (config) {
				this.base_url = "http://search.twitter.com/search.json?lang=en&q=";
				this.cache();
				this.subscriptions();
				
				this.template = '<li>'+
							'<img src="{{image}}" alt="">'+
                            '<p>{{author}} said: '+ 
                            '<a href="{{url}}">{{tweet}}</a></p>'+
							'</li>';
				this.bindEvents();

				
				return this;
			},

			cache: function() {
				this.container = $('#tweets');
				this.query= $('#query');
			},	

			subscriptions: function() {
				$.subscribe( 'twitter/query', this.fetchResult );
				$.subscribe('twitter/results',this.renderResult);
			},

			bindEvents: function() {
				this.query.on( 'keyup', this.search );
			},



			fetchResult: function() {
				var self = Twitter;
				self.url = self.base_url + self.query + "&result_type=mixed&callback=?";
				
				$.getJSON(self.url,function(data) {
					self.results = data.results;
					$.publish('twitter/results');
				});
			},

			renderResult: function() {
				var self = Twitter;
				self.container.html(
					$.map( self.results, function( obj, index ) {
						var tweet = obj.text;

						var author = obj.from_user+"  ("+obj.from_user_name+")";
						var url = "https://twitter.com/"+obj.from_user+"/status/"+obj.id_str;
						var image = obj.profile_image_url;


						return self.template.replace(/{{tweet}}/, tweet)
												.replace(/{{author}}/, author)
												.replace(/{{image}}/,image)
												.replace(/{{url}}/, url);
					}).join('')
				);
			},
				

			search:function () {
				var self = Twitter,
				input = this;

				clearTimeout( self.timer );

				self.timer = ( input.value.length >= 3 ) && setTimeout(function() {
					self.query = input.value;
					$.publish( 'twitter/query' );
				}, 400);

			},
		};

window.Twitter = Twitter.init();	
			
})(jQuery);