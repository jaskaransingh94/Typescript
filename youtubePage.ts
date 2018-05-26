class YoutubeVideo {
    private title: string;
    private numberOfViews: number;
    private numberOfLikes: number;
    private numberOfDislikes: number;
    private numberOfSubscriber: number;
    private numberOfComments: number;
    private videoUrl: string;
    private postedBy: string;
    private postedOn: string;
    private description: string;

    //constructor 
    constructor(title: string, numberOfViews: number, numberOfLikes: number, numberOfDislikes: number, numberOfSubscriber: number,
        numberOfComments: number, videoUrl: string, postedBy: string, postedOn: string, description?: any, 
        public autoPlay:boolean = false, public sortCommentsBy:string = "New") { // adding default parameters and making them optional
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

     getTitle= ():string=>{
        return this.title;
    }
    getNumberOfLikes= ():number=>{
        return this.numberOfLikes;
    }
    getNumberOfDislikes= ():number=>{
        return this.numberOfDislikes;
    }
    getNumberOfComments= ():number=>{
        return this.numberOfComments;
    }
    getNumberOfSubscriber= ():number=>{
        return this.numberOfSubscriber;
    }
    getNumberOfViews= ():number=>{
        return this.numberOfViews;
    }
    getVideoUrl= ():string=>{
        return this.videoUrl;
    }
    getPostedBy= ():string=>{
        return this.postedBy;
    }
    getPostedOn= ():string=>{
        return this.postedOn;
    }
    getDescription= ():string=>{
        return `description`;
    }

    sortComments=():string=>{
        if(this.sortCommentsBy==='New'){
            return 'array comments sort by date time'
        }
        else{
            return 'array of comments sort by rating'
        }
    }

    CountOfLikes=():number=> {                         
        return this.numberOfLikes+=10;
     }
     CountOfDislikes=():number=> {
        return this.numberOfDislikes+=10;
    }
    CountOfViews=():number=> {
        return this.numberOfViews+=10;
    }
    CountOfSubscriber=():number=> {
        return this.numberOfSubscriber+=10;
    }
    CountOfComments=():number=> {
        return this.numberOfComments+=10;
    }

    isAutoPlay=():boolean=>{
        if(this.autoPlay){
            return true;
        }
        else{
            return false;
        }
    }

    setAutoplay=(autoPlay:boolean)=>{
        this.autoPlay = autoPlay;
    }


    setSort=(sortCommentsBy:string)=>{
        this.sortCommentsBy = sortCommentsBy
    }

    setTitle=(title:string) =>{
         this.title=title;
    }
    setDescription=(description:string) =>{
        this.description=description;
    }
    setPostedOn=(postedOn:string) =>{
         this.postedOn=postedOn;
    }
    setPostedBy=(postedBy:string) =>{
         this.postedBy=postedBy;
    }
    setUrl=(videoUrl:string)=>{
         this.videoUrl=videoUrl;
    }
     //getters
    getAllComments=()=>{
        return `all comments`;
    }
    getRelatedVideos=():string => {
        return `all related videos`;
    }
    getRecommendedVideos= ():string =>{
        return `all recommended videos`;
    }
    
    
    }// end class 
  
    let edwisorVideo=new YoutubeVideo(`Introduction to TypeScript`,100990,444,2,222222,24,`https://www.youtube.com/`,
                               `Edwisor`,`Mar 17, 2018`,`TypeScript Basics`); 
    console.log (`\nBefore Update`);
    console.log(`Video Title: ${edwisorVideo.getTitle()}`);
    console.log(`Number Of views: ${edwisorVideo.getNumberOfViews()}`); 
    console.log(`Number of likes: ${edwisorVideo.getNumberOfLikes()}`);
    console.log(`Number of Dislikes: ${edwisorVideo.getNumberOfDislikes()}`);
    console.log(`Posted By: ${edwisorVideo.getPostedBy()}`);
    console.log(`Posted on: ${edwisorVideo.getPostedOn()}`);
    console.log(`Video Description: ${edwisorVideo.getDescription()}`);
    console.log(`Number Of comments: ${edwisorVideo.getNumberOfComments()}`);
    console.log(`All comments List: ${edwisorVideo.getAllComments()}`);
    console.log(`All related Videos: ${edwisorVideo.getRelatedVideos()}`);
    console.log(`All recommended Videos: ${edwisorVideo.getRecommendedVideos()}`);
    console.log(`Auto Play: ${edwisorVideo.isAutoPlay()}`);
    console.log(`Comments Sorted By: ${edwisorVideo.sortComments()}`);
    
    
    let edwisorVideoNew=new YoutubeVideo(`Introduction to TypeScript`,100990,444,2,222222,24,`https://www.youtube.com/`,
                               `Edwisor`,`Mar 17, 2018`,`TypeScript Basics`, true, "Rating"); // second object including optional parameter

    edwisorVideoNew.setTitle(`Jquery Introduction`);
    edwisorVideoNew.setPostedBy(`Jaskaran Singh`);
    edwisorVideoNew.setPostedOn(`22 Jul, 2017`);
    edwisorVideo.setUrl(`https://www.youtube.com/`);
    edwisorVideoNew.setDescription(`Jquery Basics`);
    edwisorVideoNew.CountOfLikes();
    edwisorVideoNew.CountOfDislikes();
    edwisorVideoNew.CountOfViews();
    edwisorVideoNew.CountOfSubscriber();
    edwisorVideoNew.CountOfComments();
     
    console.log(`\nAfter Update`);
    console.log(`Video Title: ${edwisorVideoNew.getTitle()}`);
    console.log(`Number Of views: ${edwisorVideoNew.getNumberOfViews()}`); 
    console.log(`Number of likes: ${edwisorVideoNew.getNumberOfLikes()}`);
    console.log(`Number of Dislikes: ${edwisorVideoNew.getNumberOfDislikes()}`);
    console.log(`Posted By: ${edwisorVideoNew.getPostedBy()}`);
    console.log(`Posted on: ${edwisorVideoNew.getPostedOn()}`);
    console.log(`Video Description: ${edwisorVideoNew.getDescription()}`);
    console.log(`Number Of comments: ${edwisorVideoNew.getNumberOfComments()}`);
    console.log(`All comments List: ${edwisorVideoNew.getAllComments()}`);
    console.log(`All related Videos: ${edwisorVideoNew.getRelatedVideos()}`);
    console.log(`All recommended Videos: ${edwisorVideoNew.getRecommendedVideos()}`);
    console.log(`Auto Play: ${edwisorVideoNew.isAutoPlay()}`);
    console.log(`Comments Sorted By: ${edwisorVideoNew.sortComments()}`);
