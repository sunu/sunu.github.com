
	window.onload = 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
	var Instagram ={
		init: function(config) {
			this.config = config;
			this.bucket = this.config.bucket;
			this.template = this.config.template;
			this.query="";
			this.popular_url="https://api.instagram.com/v1/media/popular";
			this.url = this.popular_url;
			this.images = [];
			this.imageLength = this.images.length;
			this.setTemplate();
			this.bindEvent();
			this.afterJSONBinding();
		},


		bindEvent: function() {
			self = this;
			$('#search').keydown(function (e){
			    if(e.keyCode == 13){
			        self.search();
			    }
			});

			$('#back').on('click',self.back);
			//adding the event listerner for Mozilla
			if(window.addEventListener)
				document.addEventListener('DOMMouseScroll', self.moveObject, false);
				 
			//for IE/OPERA etc
			document.onmousewheel = self.moveObject;
			
		},	

		setTemplate: function() {
			this.template = Handlebars.compile(this.template);

		},

		fetchJSON: function() {
			self=Instagram;
			return $.ajax({
				url:self.url,
				data:{
					'client_id':'61135c5b08074830bed3c1303467161d',
					'access_token':'a73g7'
				},
				dataType:'jsonp',
			}).promise();
		},

		afterJSONBinding: function() {
			var self = this;
			
			this.fetchJSON().then(
				function(result){
					if(self.parseResults(result)!==false){
						self.display();
						self.setSlider();

					}
				
				},
				function(result,error) {
					//console.log('error');
				});

		},

		display: function() {
			this.bucket.html(this.template(this.images));
			
			//console.log(w);
			var w = $(window).width()/2.4;
			$('.slider ul').css('left',w);
			if(this.query !== ""){
				$('h2').html('Pics tagged \'' + this.query + '\' on Instagram');
				$('#back').fadeIn();
				input.val("");

			}
			
			//console.log(w)
		},

		setSlider: function() {
			self= Instagram ;
			self.curr = 0;
			self.offset = $("#"+self.curr).offset();

			var dir = '-=';
			//$(window).on('scroll',console.log('yo!'));
			$('img').on('click',function() {
				
				var nav = false;
				var id = parseInt($(this).attr('id'));
				var difference =1
				if(id<self.curr){
					dir = '+=';
					//console.log('id='+id);
					//console.log('curr='+self.curr);
					difference = self.curr - id;

					self.curr = id;
					nav = true;


				}
				if(id>self.curr){
					dir = '-=';
					//console.log('id='+id);
					//console.log('curr='+self.curr);
					difference = id - self.curr;
					self.curr=id;
					nav = true;
				}
				if (nav){
					//console.log('diff='+difference);
					$('.slider ul').animate({left:dir+ 180*difference});
					self.showcase();
					//console.log(self.curr);
				}
				
			})	;

			 self.showcase();


		},

		showcase : function() {
			self = this;
			$('#holder').hover(function() {$('#more_info').fadeIn();},function() {$('#more_info').fadeOut();});
			$('#holder').css({left:self.offset.left - 80, top:self.offset.top-72.5});
			$('#showcase').attr('src',self.images[self.curr].image).fadeIn(50);
			$('#info').css({left:self.offset.left - 80, top:self.offset.top-72.5+360}).show();
			$('#info #caption').html(self.images[self.curr].caption);
			$('#info #name').html(self.images[self.curr].fullName);
			$('#info #username').html(self.images[self.curr].userName);
			$('#info #pic').attr('src',self.images[self.curr].pic);
			$('#more_info #likes').html(self.images[self.curr].likes);
			$('#more_info #comments').html(self.images[self.curr].comments);
			$('#more_info #date').html(self.images[self.curr].date);
		},

		parseResults:function(result){

			//console.log(result);
			var self = this
			if(result.data.length===0){
				self.back();
			}
			self.images=[];
			$.map(result.data,function(obj,index) {
				//console.log(obj);
				return self.images.push({
						image:obj.images.low_resolution.url,
						thumb:obj.images.thumbnail.url,
						index:index,
						caption:obj.caption? obj.caption.text :'',
						fullName:obj.user.full_name,
						pic:obj.user.profile_picture,
						userName:obj.user.username,
						likes:obj.likes.count,
						comments:obj.comments.count,
						date:Date(obj.created_time).substring(0,16),

						});
			});
			self.imageLength=self.images.length;
		},

		search: function(){
			self= Instagram;
			input = $("#search");
			self.query = input[0].value.split(" ")[0];
			self.url = 'https://api.instagram.com/v1/tags/'+self.query+'/media/recent?';
			
			
			
			self.afterJSONBinding();

		},

		back: function() {
			self.url = self.popular_url;
			$('#back').fadeOut();
			self.afterJSONBinding();
			$('h2').html('Popular Pics On Instagram');
			self.query="";
		},

		moveObject: function (event){
			    var delta = 0;
			    var dir, difference;
			    self = Instagram;
			 
			    if (!event) event = window.event;

			    event.preventDefault();

			    console.log(event);
			 
			    // normalize the delta
			    if (event.wheelDelta) {
			 
			        // IE and Opera
			        delta = event.wheelDelta / 60;
			 
			    } else if (event.detail) {
			 
			        // W3C
			        delta = -event.detail / 2;
			    }

			    console.log(delta);
			    console.log(typeof(self.curr));
			    console.log(self.imageLength);


			    if ((delta>0)&&(self.curr>0)){
			    	dir="+=";
			    	self.curr = self.curr-1;

			    	$('.slider ul').animate({left:dir+ 180},100);

					self.showcase();
			    }
			    if ((delta<0)&&(self.curr<self.imageLength-1)){
			    	dir = "-=";
			    	self.curr = self.curr+1;
			    	$('.slider ul').animate({left:dir+ 180},100);

					self.showcase();
			    }

			    //if((delta<0)&&(self.curr==self.))

			    
			    //var currPos=document.getElementById('scroll').offsetTop;
			 
			    //calculating the next position of the object
			    //currPos=parseInt(currPos)-(delta*10);
			 
			    //moving the position of the object
			    //document.getElementById('scroll').style.top = currPos+"px";
			    //document.getElementById('scroll').innerHTML = event.wheelDelta + ":" + event.detail;
		},


	}

	Instagram.init({
		bucket:$('#bucket'),
		template:$('#template').html()
	});


			




});


