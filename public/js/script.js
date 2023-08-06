/*add event listeners here*/
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("newposts").addEventListener("click", newpost);
// });
/*add needed variables here*/


/*add functions used here*/
function newpost(){
	var p = document.createElement("p");
	p.innerHTML = "dadsadasd";
	
	document.getElementById("content-space").appendChild(p);
}

// opens create post window
$('#open-create-post').click(function() {
	document.querySelector('.bg-modal').style.display = 'flex';
	$(this).hide();
});

// if logged out
$('#open-create-post0').click(function() {
	document.querySelector('.bg-modal').style.display = 'flex';
	$(this).hide();
});

$('#close-window').click(function() {
	document.querySelector('.bg-modal').style.display = 'none';
	$('#open-create-post0').show();
});

// closes create post window
$('#close-create-post').click(function() {
	document.querySelector('.bg-modal').style.display = 'none';
	$('#open-create-post').show();
});

// voting when logged out
$('.login-prompt').click(function() {
	document.querySelector('.bg-modal').style.display = 'flex';
});

// opens comment box
// $('#comments-box').click(function () {
// 	var commentsButton = document.getElementById("comments-button");
// 	var commentsSection = document.getElementById("comments-section");
//
// 	commentsButton.addEventListener("click", function() {
// 		var commentsBox = document.getElementById("comments-box");
// 		commentsBox.style.display = "block";
//
// 		var sampleComment = document.createElement("div");
// 		sampleComment.textContent = "This is a sample comment.";
//
// 		commentsSection.appendChild(sampleComment);
// 	});
//
// })

$('#comments-box').click(function () {
	var commentsBox = document.getElementById("comments-box");
	commentsBox.style.display = "block";

	var sampleComment = document.createElement("div");
	sampleComment.textContent = "This is a sample comment.";

	var commentsSection = document.getElementById("comments-section");
	commentsSection.appendChild(sampleComment);
});

//ar commentsButton = document.getElementById("comments-button");

// commentsButton.addEventListener("click", function() {
// 	var commentsBox = document.getElementById("comments-box");
// 	commentsBox.style.display = "block";
//
// 	var sampleComment = document.createElement("div");
// 	sampleComment.textContent = "Woah!.";
//
// 	var commentsSection = document.getElementById("comments-section");
// 	commentsSection.appendChild(sampleComment);
// });


// creates post (unfinished)
$('#open-create-post0').click(function() {

		
	document.querySelector('.bg-modal').style.display = 'none';
	$('#open-create-post').show();
	
	var post = document.createElement("div");
	post.classList.add("post",  "container-fluid", "mt-5", "mb-4",   "rounded")
	
	var d_flex_main = document.createElement("div");
	d_flex_main.classList.add("d-flex", "flex-row", "justify-content-start");
	
	var pic = document.createElement("img");
	
	pic.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg";
	pic.classList.add("profile-avatar", "img-fluid", "border", "border-dark", "rounded");
	
	var mt_pic = document.createElement("div");
	mt_pic.classList.add("mt-3", "user-icon", "m-2", "bg-muted", "rounded");
	
	mt_pic.appendChild(pic);
	
	var d_flex_pic = document.createElement("div");
	d_flex_pic.classList.add("d-flex", "flex-column");
	
	d_flex_pic.appendChild(mt_pic);
	d_flex_main.appendChild(d_flex_pic);
	
	
	var d_flex_postmsg = document.createElement("div");
	d_flex_postmsg.classList.add("d-flex", "flex-column", "bd-highlight");
	
	var postmsgs = document.createElement("div");
	postmsgs.classList.add("d-flex", "flex-column", "bd-highlight");
	
	var userdetail = document.createElement("div");
	userdetail.classList.add("p-2", "bd-highlight", "post-info");
	var username = document.createElement("a");
	username.href="";
	username.classList.add("text-dark");
	var uservalue = document.createElement("b");
	uservalue.innerHTML = "JoeBidenXXX ";
	username.appendChild(uservalue);
	var textnode = document.createTextNode("posted on ");
	var forumsite = document.createElement("a");
	forumsite.href="#";
	forumsite.innerHTML = "Admins Forum";
	forumsite.classList.add("text-dark");
	var bolden = document.createElement("b");
	bolden.appendChild(forumsite);
	var timeframe = document.createElement("i");
	timeframe.innerHTML = " Posted Recently";
	userdetail.appendChild(username);
	userdetail.appendChild(textnode);
	userdetail.appendChild(bolden);
	userdetail.appendChild(timeframe);
	
	var postTitle = document.createElement("div");
	postTitle.classList.add("post-title");
	var ptone = document.createElement("div");
	ptone.classList.add("pt-1", "pl-2");
	var titles = document.createElement("b");
	
	var titleval = document.getElementById("newpost_Title").value;
	var node = document.createTextNode(titleval);
	titles.appendChild(node);
	document.getElementById("newpost_Title").value="";

	if (titleval === "") {
		alert("Please enter a title before posting.");
		return;
	}
	
	var postdsc = document.createElement("div");
	postdsc.classList.add("pl-2", "pb-2", "bd-highlight");
	
		var descval = document.getElementById("description").value;
		var nodedesc = document.createTextNode(descval);
		postdsc.appendChild(nodedesc);
	
	ptone.appendChild(titles);
	postTitle.appendChild(ptone);
	postmsgs.appendChild(userdetail);
	postmsgs.appendChild(postTitle);
	postmsgs.appendChild(postdsc);
	d_flex_postmsg.appendChild(postmsgs);
	d_flex_main.appendChild(d_flex_postmsg);
	
	post.appendChild(d_flex_main);
	
	var d_flex_content = document.createElement("div");
	d_flex_content.classList.add("d-flex", "flex-row");
	
	var votes = document.createElement("div");
	votes.classList.add("vote-div", "d-flex", "flex-column");
	var upvote = document.createElement("div");
	upvote.classList.add("btn", "btn-outline-dark", "vote-up-icon", "p-1", "m-2", "bg-muted", "rounded");
	var iup = document.createElement("i");
	iup.classList.add("fa", "fa-arrow-up");
	var votecount = document.createElement("div");
	votecount.classList.add("post-vote-count");
	votecount.innerHTML = "0";
	var downvote = document.createElement("div");
	downvote.classList.add("btn", "btn-outline-dark", "vote-down-icon", "p-1", "m-2", "bg-muted", "rounded");
	var idown = document.createElement("i");
	idown.classList.add("fa", "fa-arrow-down");
	upvote.appendChild(iup);
	downvote.appendChild(idown);
	votes.appendChild(upvote);
	votes.appendChild(votecount);
	votes.appendChild(downvote);
	d_flex_content.appendChild(votes);
	
	var postpic = document.createElement("div");
	postpic.classList.add("img-content",  "mr-5", "ml-4", "mt-3");
	var postimage = document.createElement("img");
	postimage.classList.add("rounded", "img-fluid");
	var file = document.getElementById('upload').files[0];
	var reader  = new FileReader();
	reader.onload = function(e)  {
		postimage.src = e.target.result;
				
		postpic.appendChild(image);
	}
	reader.readAsDataURL(file);
	
	postpic.appendChild(postimage);
	var d_flex_image = document.createElement("div");
	d_flex_image.classList.add("img-post", "d-flex", "flex-column");
	d_flex_image.appendChild(postpic);
	d_flex_content.appendChild(d_flex_image);
	
	post.appendChild(d_flex_content);
	
	var d_flex_buttons = document.createElement("div");
	
	d_flex_buttons.classList.add("d-flex", "flex-row", "post-buttons");
	var flexbuttonA = document.createElement("div");
	flexbuttonA.classList.add("flex-column");
	var buttA = document.createElement("button");
	buttA.classList.add("btn", "btn-sm", "btn-outline-dark", "mr-2");
	var comment = document.createElement("i");
	comment.classList.add("fa-solid", "fa-comment");
	buttA.appendChild(comment);
	var comtext = document.createTextNode(" Comments");
	buttA.appendChild(comtext);
	flexbuttonA.appendChild(buttA);
	
	var flexbuttonB = document.createElement("div");
	flexbuttonB.classList.add("flex-column");
	var buttB = document.createElement("button");
	buttB.classList.add("btn", "btn-sm", "btn-outline-dark", "mr-2");
	var share = document.createElement("i");
	share.classList.add("fa-solid", "fa-share");
	buttB.appendChild(share);
	var shatext = document.createTextNode(" Share");
	buttB.appendChild(shatext);
	flexbuttonB.appendChild(buttB);
	
	var flexbuttonC = document.createElement("div");
	flexbuttonC.classList.add("flex-column");
	var buttC = document.createElement("button");
	buttC.classList.add("btn", "btn-sm", "btn-outline-dark", "mr-2");
	var bookmark = document.createElement("i");
	bookmark.classList.add("fa-solid", "fa-bookmark");
	buttC.appendChild(bookmark);
	var booktext = document.createTextNode(" Save");
	buttC.appendChild(booktext);
	flexbuttonC.appendChild(buttC);
	
	var flexbuttonD = document.createElement("div");
	flexbuttonD.classList.add("flex-column");
	var buttD = document.createElement("button");
	buttD.classList.add("btn", "btn-sm", "btn-outline-dark", "mr-2");
	var bookmark = document.createElement("i");
	bookmark.classList.add("fa-solid", "fa-pencil");
	buttD.appendChild(bookmark);
	var booktext = document.createTextNode(" Edit");
	buttD.appendChild(booktext);
	flexbuttonD.appendChild(buttD);

	var flexbuttonE = document.createElement("div");
	flexbuttonE.classList.add("flex-column");
	var buttE = document.createElement("button");
	buttE.classList.add("btn", "btn-sm", "btn-outline-dark", "mr-2");
	var bookmark = document.createElement("i");
	bookmark.classList.add("fa-solid", "fa-trash");
	buttE.appendChild(bookmark);
	var booktext = document.createTextNode(" Delete");
	buttE.appendChild(booktext);
	flexbuttonE.appendChild(buttE);
	
	d_flex_buttons.appendChild(flexbuttonA);
	d_flex_buttons.appendChild(flexbuttonB);
	d_flex_buttons.appendChild(flexbuttonC);
	d_flex_buttons.appendChild(flexbuttonD);
	d_flex_buttons.appendChild(flexbuttonE);
	
	post.appendChild(d_flex_buttons);
	
	document.getElementById("post-section ").appendChild(post);
	window.scrollTo(0, document.body.scrollHeight);
});

$("#delete-post1").click(function(){
	deletePost(document.getElementById("post1"));
});

function deletePost(element){
	const parent = element.parentNode;
	parent.removeChild(element);
}

//increment the number of likes
function incrementLike(element){
	console.log(element[0]);
	element = element[0];
	var likes = element.innerHTML;
	likes = parseInt(likes);

	likes++;

	element.innerHTML = likes;
}

$(document).ready(function(){
	$("#upvote1").on("click", function(){
		//increment the number of likes
		console.log("called");
		incrementLike($("#likeCount1"));
	});
	$("#upvote2").on("click", function(){
		//increment the number of likes
		console.log("called");
		incrementLike($("#likeCount2"));
	});
	$("#upvote3").on("click", function(){
		//increment the number of likes
		console.log("called");
		incrementLike($("#likeCount3"));
	});
	$("#upvote4").on("click", function(){
		//increment the number of likes
		console.log("called");
		incrementLike($("#likeCount4"));
	});
	$("#upvote5").on("click", function(){
		//increment the number of likes
		console.log("called");
		incrementLike($("#likeCount5"));
	});
});


//decrement the number of likes
function decrementLike(element){
	console.log(element[0]);
	element = element[0];
	var likes = element.innerHTML;
	likes = parseInt(likes);

	likes--;

	element.innerHTML = likes;
}

$(document).ready(function(){
	$("#downvote1").on("click", function(){
		//decrement the number of likes
		console.log("called");
		decrementLike($("#likeCount1"));
	});
	$("#downvote2").on("click", function(){
		//decrement the number of likes
		console.log("called");
		decrementLike($("#likeCount2"));
	});
	$("#downvote3").on("click", function(){
		//decrement the number of likes
		console.log("called");
		decrementLike($("#likeCount3"));
	});
	$("#downvote4").on("click", function(){
		//decrement the number of likes
		console.log("called");
		decrementLike($("#likeCount4"));
	});
	$("#downvote5").on("click", function(){
		//decrement the number of likes
		console.log("called");
		decrementLike($("#likeCount5"));
	});
});