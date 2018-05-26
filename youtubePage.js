var YoutubeVideo = /** @class */ (function () {
    //constructor 
    function YoutubeVideo(title, numberOfViews, numberOfLikes, numberOfDislikes, numberOfSubscriber, numberOfComments, videoUrl, postedBy, postedOn, description, autoPlay, sortCommentsBy) {
        if (autoPlay === void 0) { autoPlay = false; }
        if (sortCommentsBy === void 0) { sortCommentsBy = "New"; }
        var _this = this;
        this.autoPlay = autoPlay;
        this.sortCommentsBy = sortCommentsBy;
        this.getTitle = function () {
            return _this.title;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getNumberOfSubscriber = function () {
            return _this.numberOfSubscriber;
        };
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getVideoUrl = function () {
            return _this.videoUrl;
        };
        this.getPostedBy = function () {
            return _this.postedBy;
        };
        this.getPostedOn = function () {
            return _this.postedOn;
        };
        this.getDescription = function () {
            return "description";
        };
        this.sortComments = function () {
            if (_this.sortCommentsBy === 'New') {
                return 'array comments sort by date time';
            }
            else {
                return 'array of comments sort by rating';
            }
        };
        this.CountOfLikes = function () {
            return _this.numberOfLikes += 10;
        };
        this.CountOfDislikes = function () {
            return _this.numberOfDislikes += 10;
        };
        this.CountOfViews = function () {
            return _this.numberOfViews += 10;
        };
        this.CountOfSubscriber = function () {
            return _this.numberOfSubscriber += 10;
        };
        this.CountOfComments = function () {
            return _this.numberOfComments += 10;
        };
        this.isAutoPlay = function () {
            if (_this.autoPlay) {
                return true;
            }
            else {
                return false;
            }
        };
        this.setAutoplay = function (autoPlay) {
            _this.autoPlay = autoPlay;
        };
        this.setSort = function (sortCommentsBy) {
            _this.sortCommentsBy = sortCommentsBy;
        };
        this.setTitle = function (title) {
            _this.title = title;
        };
        this.setDescription = function (description) {
            _this.description = description;
        };
        this.setPostedOn = function (postedOn) {
            _this.postedOn = postedOn;
        };
        this.setPostedBy = function (postedBy) {
            _this.postedBy = postedBy;
        };
        this.setUrl = function (videoUrl) {
            _this.videoUrl = videoUrl;
        };
        //getters
        this.getAllComments = function () {
            return "all comments";
        };
        this.getRelatedVideos = function () {
            return "all related videos";
        };
        this.getRecommendedVideos = function () {
            return "all recommended videos";
        };
        this.title = title;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.numberOfSubscriber = numberOfSubscriber;
        this.numberOfComments = numberOfComments;
        this.videoUrl = videoUrl;
        this.postedBy = postedBy;
        this.postedOn = postedOn;
        this.description = description;
        this.autoPlay = autoPlay;
        this.sortCommentsBy = sortCommentsBy;
    } // end of constructor
    return YoutubeVideo;
}()); // end class 
var edwisorVideo = new YoutubeVideo("Introduction to TypeScript", 100990, 444, 2, 222222, 24, "https://www.youtube.com/", "Edwisor", "Mar 17, 2018", "TypeScript Basics");
console.log("\nBefore Update");
console.log("Video Title: " + edwisorVideo.getTitle());
console.log("Number Of views: " + edwisorVideo.getNumberOfViews());
console.log("Number of likes: " + edwisorVideo.getNumberOfLikes());
console.log("Number of Dislikes: " + edwisorVideo.getNumberOfDislikes());
console.log("Posted By: " + edwisorVideo.getPostedBy());
console.log("Posted on: " + edwisorVideo.getPostedOn());
console.log("Video Description: " + edwisorVideo.getDescription());
console.log("Number Of comments: " + edwisorVideo.getNumberOfComments());
console.log("All comments List: " + edwisorVideo.getAllComments());
console.log("All related Videos: " + edwisorVideo.getRelatedVideos());
console.log("All recommended Videos: " + edwisorVideo.getRecommendedVideos());
console.log("Auto Play: " + edwisorVideo.isAutoPlay());
console.log("Comments Sorted By: " + edwisorVideo.sortComments());
var edwisorVideoNew = new YoutubeVideo("Introduction to TypeScript", 100990, 444, 2, 222222, 24, "https://www.youtube.com/", "Edwisor", "Mar 17, 2018", "TypeScript Basics", true, "Rating"); // second object including optional parameter
edwisorVideoNew.setTitle("Jquery Introduction");
edwisorVideoNew.setPostedBy("Jaskaran Singh");
edwisorVideoNew.setPostedOn("22 Jul, 2017");
edwisorVideo.setUrl("https://www.youtube.com/");
edwisorVideoNew.setDescription("Jquery Basics");
edwisorVideoNew.CountOfLikes();
edwisorVideoNew.CountOfDislikes();
edwisorVideoNew.CountOfViews();
edwisorVideoNew.CountOfSubscriber();
edwisorVideoNew.CountOfComments();
console.log("\nAfter Update");
console.log("Video Title: " + edwisorVideoNew.getTitle());
console.log("Number Of views: " + edwisorVideoNew.getNumberOfViews());
console.log("Number of likes: " + edwisorVideoNew.getNumberOfLikes());
console.log("Number of Dislikes: " + edwisorVideoNew.getNumberOfDislikes());
console.log("Posted By: " + edwisorVideoNew.getPostedBy());
console.log("Posted on: " + edwisorVideoNew.getPostedOn());
console.log("Video Description: " + edwisorVideoNew.getDescription());
console.log("Number Of comments: " + edwisorVideoNew.getNumberOfComments());
console.log("All comments List: " + edwisorVideoNew.getAllComments());
console.log("All related Videos: " + edwisorVideoNew.getRelatedVideos());
console.log("All recommended Videos: " + edwisorVideoNew.getRecommendedVideos());
console.log("Auto Play: " + edwisorVideoNew.isAutoPlay());
console.log("Comments Sorted By: " + edwisorVideoNew.sortComments());
