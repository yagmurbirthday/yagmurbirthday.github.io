$(document).ready(function(){   
    getDankMeme();
});

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

function getDankMeme(){
    var imgElement = document.getElementById("dankMemeImg");
    var labelElement = document.getElementById("dankMemeLabel");

    var uri = "https://api.reddit.com/r/dankmemes";

    var client = new HttpClient();
    client.get(uri, function(response) {
        var memes = JSON.parse(response).data.children;
        var memeIndex = Math.ceil(Math.random() * memes.length);
        var selMeme = memes[memeIndex];

        var imgUrl = selMeme.data.preview.images[0].source.url;
        imgUrl = imgUrl.replace("amp;s", "s");

        labelElement.innerHTML = selMeme.data.title + " - " + selMeme.data.name;
        imgElement.src = imgUrl;
    });

}

marqueeInit({
	uniqueid: 'mycrawler',
	style: {
		'padding': '2px',
		'width': '100%'
	},
	inc: 5, //speed - pixel increment for each iteration of this marquee's movement
	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	moveatleast: 2,
	neutral: 150,
	savedirection: true,
	random: true
});

marqueeInit({
	uniqueid: 'mycrawler2',
	style: {
		'padding': '2px',
		'width': '100%'
	},
	inc: 5, //speed - pixel increment for each iteration of this marquee's movement
	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	moveatleast: 2,
	neutral: 150,
	savedirection: true,
	random: true
});

marqueeInit({
	uniqueid: 'mycrawler3',
	style: {
		'padding': '2px',
		'width': '100%',
	},
	inc: 5, //speed - pixel increment for each iteration of this marquee's movement
	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	moveatleast: 2,
	neutral: 150,
	savedirection: true,
	random: true
});
