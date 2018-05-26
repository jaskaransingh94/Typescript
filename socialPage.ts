
class SocialProfile{
    private name:string;
    private email: string;
    private birthday :string;
    private age:number;
    private gender : string;
    private hometown :string;
    private currentCity : string;
    private school:string;
    private work: string;
    private relationshipStatus: string;
    private mobileNumber:number;
    private about:string;
    private quote:string;
    private familyMembers: string[];
// constructor
    constructor (name:string,email:string,birthday:string,age:number,gender:string,work:string,mobileNumber:number,familyMembers:string[],
                relationshipStatus?:any,hometown?:any,currentCity?:any,
                 school?:any,about?:any,quote?:any){
        this.name=name;
        this.email=email;
        this.birthday=birthday;
        this.age=age;
        this.gender=gender;
        this.work=work;
        this.mobileNumber=mobileNumber;
        this.familyMembers = familyMembers;
        this.relationshipStatus=relationshipStatus;
        this.hometown=hometown;
        this.currentCity=currentCity;
        this.school=school;
        this.about=about;
        this.quote=quote;
       
 
 
     }// end constructor
     
     //getters
     getName= ():string=>{
         return this.name;
     }
     getEmail= ():string=>{
         return this.email;
     }
     getBirthday= ():string=>{
         return this.birthday;
     }
     getAge= ():number=>{
        return this.age;
    }
     getGender= ():string=>{
         return this.gender;
     }
     getWork= ():string=>{
         return this.work;
     }
     getMobile= ():number=>{
         return this.mobileNumber;
     }
    getMembers=():string[]=>{
        return this.familyMembers
    }    
     getRelationStat= ():string=>{
        if(this.relationshipStatus!=undefined){
            return this.relationshipStatus;          
         }
         else{
             return `Empty`;
         }
        
     }
     getHomeTown= ():string=>{
        if(this.hometown!=undefined){
            return this.hometown;          
         }
         else{
             return `Empty`;
         }
     }
     getCurrentCity= ():string=>{
        if(this.currentCity!=undefined){
            return this.currentCity;          
         }
         else{
             return `Empty`;
         }
        
     }
     getSchool= ():string=>{
         if(this.school!=undefined){
            return this.school;          
         }
         else{
             return `Empty`;
         }
     }
     getAbout= ():string=>{
        if(this.about!=undefined){
           return this.about;          
        }
        else{
            return `Empty`;
        }
    }
    getQuote= ():string=>{
        if(this.quote!=undefined){
           return this.quote;          
        }
        else{
            return `Empty`;
        }
    }
     
        // setters 
     setName=(name:string) =>{
          this.name=name;
     }
     setEmail=(email:string) =>{
         this.email=email;
     }
     setGender=(gender:string) =>{
          this.gender=gender;
     }
     setBirthday=(birth:string) =>{
          this.birthday=birth;
     }
     setMobile=(number:number)=>{
          this.mobileNumber=number;
     }
     setMembers=(familyMembers:string[])=>{
        return this.familyMembers = familyMembers
    }
    setAge=(age:number)=>{
        this.age=age;
     }
     setWork=(work:string)=>{
        this.work=work;
     }
     setRelationstat=(relation:string)=>{
        this.relationshipStatus=relation;
     }
     setHomeTown=(home:string)=>{
        this.hometown=home;
     }
     setCurrentCity=(city:string)=>{
        this.currentCity=city;
     }
     setSchool=(school:string)=>{
        this.school=school;
     }
     setAbout=(about:string)=>{
        this.about=about;
     }
     setQuote=(quote:string)=>{
        this.quote=quote;
     }
         
     }

     let myInfo=new SocialProfile(`Jaskaran Singh`,`jaskaran@gmail.com`,`22 Mar, 1994`,24,`male`,`working`,1234567890,
                                         ['A','B','C'],`single`,`Delhi`); 
    console.log (`\nBefore Update`);
    console.log(`Name: ${myInfo.getName()}`);
    console.log(`Email: ${myInfo.getEmail()}`); 
    console.log(`Birthday: ${myInfo.getBirthday()}`);
    console.log(`Gender: ${myInfo.getGender()}`);
    console.log(`Age: ${myInfo.getAge()}`);
    console.log(`Work: ${myInfo.getWork()}`);
    console.log(`Mobile Number: ${myInfo.getMobile()}`);
    console.log(`Family Members: ${myInfo.getMembers()}`);
    console.log(`Relationship status: ${myInfo.getRelationStat()}`);
    console.log(`Home Town: ${myInfo.getHomeTown()}`);
    console.log(`Current City: ${myInfo.getCurrentCity()}`);
    console.log(`School: ${myInfo.getSchool()}`);
    console.log(`About: ${myInfo.getAbout()}`);
    console.log(`Quote: ${myInfo.getQuote()}`);

    //set the properties 
    myInfo.setName(`cassy`);
    myInfo.setEmail(`cassy@gmail.com`);
    myInfo.setGender(`Male`);
    myInfo.setBirthday('25 Jul, 2018');
    myInfo.setAge(27);
    myInfo.setWork(`not working`);
    myInfo.setMobile(345566767899);
    myInfo.setMembers(['C','D','E']);
    myInfo.setRelationstat(`Single`);
    myInfo.setHomeTown(`Gurgaon`);
    myInfo.setCurrentCity(`Delhi`);
    myInfo.setSchool('JKPS');
    myInfo.setAbout('Nothing');
    myInfo.setQuote('No place like 127.0.0.0');
     
    console.log (`\nAfter Update`);
    console.log(`Name: ${myInfo.getName()}`);
    console.log(`Email: ${myInfo.getEmail()}`); 
    console.log(`Birthday: ${myInfo.getBirthday()}`);
    console.log(`Gender: ${myInfo.getGender()}`);
    console.log(`Age: ${myInfo.getAge()}`);
    console.log(`Work: ${myInfo.getWork()}`);
    console.log(`Mobile Number: ${myInfo.getMobile()}`);
    console.log(`Family Members: ${myInfo.getMembers()}`);
    console.log(`Relaationship status: ${myInfo.getRelationStat()}`);
    console.log(`Home Town: ${myInfo.getHomeTown()}`);
    console.log(`Current City: ${myInfo.getCurrentCity()}`);
    console.log(`School: ${myInfo.getSchool()}`);
    console.log(`About: ${myInfo.getAbout()}`);
    console.log(`Quote: ${myInfo.getQuote()}`);
