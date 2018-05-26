var SocialProfile = /** @class */ (function () {
    // constructor
    function SocialProfile(name, email, birthday, age, gender, work, mobileNumber, familyMembers, relationshipStatus, hometown, currentCity, school, about, quote) {
        var _this = this;
        //getters
        this.getName = function () {
            return _this.name;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getMobile = function () {
            return _this.mobileNumber;
        };
        this.getMembers = function () {
            return _this.familyMembers;
        };
        this.getRelationStat = function () {
            if (_this.relationshipStatus != undefined) {
                return _this.relationshipStatus;
            }
            else {
                return "Empty";
            }
        };
        this.getHomeTown = function () {
            if (_this.hometown != undefined) {
                return _this.hometown;
            }
            else {
                return "Empty";
            }
        };
        this.getCurrentCity = function () {
            if (_this.currentCity != undefined) {
                return _this.currentCity;
            }
            else {
                return "Empty";
            }
        };
        this.getSchool = function () {
            if (_this.school != undefined) {
                return _this.school;
            }
            else {
                return "Empty";
            }
        };
        this.getAbout = function () {
            if (_this.about != undefined) {
                return _this.about;
            }
            else {
                return "Empty";
            }
        };
        this.getQuote = function () {
            if (_this.quote != undefined) {
                return _this.quote;
            }
            else {
                return "Empty";
            }
        };
        // setters 
        this.setName = function (name) {
            _this.name = name;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.setGender = function (gender) {
            _this.gender = gender;
        };
        this.setBirthday = function (birth) {
            _this.birthday = birth;
        };
        this.setMobile = function (number) {
            _this.mobileNumber = number;
        };
        this.setMembers = function (familyMembers) {
            return _this.familyMembers = familyMembers;
        };
        this.setAge = function (age) {
            _this.age = age;
        };
        this.setWork = function (work) {
            _this.work = work;
        };
        this.setRelationstat = function (relation) {
            _this.relationshipStatus = relation;
        };
        this.setHomeTown = function (home) {
            _this.hometown = home;
        };
        this.setCurrentCity = function (city) {
            _this.currentCity = city;
        };
        this.setSchool = function (school) {
            _this.school = school;
        };
        this.setAbout = function (about) {
            _this.about = about;
        };
        this.setQuote = function (quote) {
            _this.quote = quote;
        };
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.age = age;
        this.gender = gender;
        this.work = work;
        this.mobileNumber = mobileNumber;
        this.familyMembers = familyMembers;
        this.relationshipStatus = relationshipStatus;
        this.hometown = hometown;
        this.currentCity = currentCity;
        this.school = school;
        this.about = about;
        this.quote = quote;
    } // end constructor
    return SocialProfile;
}());
var myInfo = new SocialProfile("Jaskaran Singh", "jaskaran@gmail.com", "22 Mar, 1994", 24, "male", "working", 1234567890, ['A', 'B', 'C'], "single", "Delhi");
console.log("\nBefore Update");
console.log("Name: " + myInfo.getName());
console.log("Email: " + myInfo.getEmail());
console.log("Birthday: " + myInfo.getBirthday());
console.log("Gender: " + myInfo.getGender());
console.log("Age: " + myInfo.getAge());
console.log("Work: " + myInfo.getWork());
console.log("Mobile Number: " + myInfo.getMobile());
console.log("Family Members: " + myInfo.getMembers());
console.log("Relationship status: " + myInfo.getRelationStat());
console.log("Home Town: " + myInfo.getHomeTown());
console.log("Current City: " + myInfo.getCurrentCity());
console.log("School: " + myInfo.getSchool());
console.log("About: " + myInfo.getAbout());
console.log("Quote: " + myInfo.getQuote());
//set the properties 
myInfo.setName("cassy");
myInfo.setEmail("cassy@gmail.com");
myInfo.setGender("Male");
myInfo.setBirthday('25 Jul, 2018');
myInfo.setAge(27);
myInfo.setWork("not working");
myInfo.setMobile(345566767899);
myInfo.setMembers(['C', 'D', 'E']);
myInfo.setRelationstat("Single");
myInfo.setHomeTown("Gurgaon");
myInfo.setCurrentCity("Delhi");
myInfo.setSchool('JKPS');
myInfo.setAbout('Nothing');
myInfo.setQuote('No place like 127.0.0.0');
console.log("\nAfter Update");
console.log("Name: " + myInfo.getName());
console.log("Email: " + myInfo.getEmail());
console.log("Birthday: " + myInfo.getBirthday());
console.log("Gender: " + myInfo.getGender());
console.log("Age: " + myInfo.getAge());
console.log("Work: " + myInfo.getWork());
console.log("Mobile Number: " + myInfo.getMobile());
console.log("Family Members: " + myInfo.getMembers());
console.log("Relaationship status: " + myInfo.getRelationStat());
console.log("Home Town: " + myInfo.getHomeTown());
console.log("Current City: " + myInfo.getCurrentCity());
console.log("School: " + myInfo.getSchool());
console.log("About: " + myInfo.getAbout());
console.log("Quote: " + myInfo.getQuote());
