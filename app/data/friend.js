var friendArray = {
    addnewfriend: function(newfriend){
        this.data.push(newfriend);
        console.log(this.data)
    },
    data: [
    {
        name:"Ahmed",
        photo:"http://static2.businessinsider.com/image/5899ffcf6e09a897008b5c04-1200/.jpg",
        scores:["5","1","4","4","5","1","2","5","4","1"]
    },
    {
        name:"Jacob Deming",
        photo:"http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg",
        scores:["4","2","5","1","3","2","2","1","3","2"]
    },
    {
        name:"Jeremiah Scanlon",
        photo:"https://dp.profilepics.in/profile_pictures/stylish-boys/boys-profile-pics-806.jpg",
        scores:["5","2","2","2","4","1","3","2","5","5"]
    },
    {
        name:"Louis T. Delia",
        photo:"https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg",
        scores:["3","3","4","2","2","1","3","2","2","3"]
    },
    {
        name:"Lou Ritter",
        photo:"https://www.trickscity.com/wp-content/uploads/2016/04/12356836_1666582430261394_7183559408635634317_o1-1020x1024.jpg",
        scores:["4","3","4","1","5","2","5","3","1","4"]
    },
    {
        name:"Jordan Biason",
        photo:"http://blogs.cuit.columbia.edu/asj2122/files/2013/07/profile.jpg",
        scores:["4","4","2","3","2","2","3","2","4","5"]
    },
]};

module.exports = friendArray;