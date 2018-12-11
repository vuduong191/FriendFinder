var friend = require("../data/friend");
var friendData = friend.data;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

    app.post("/api/friends", function(req, res) {
        var userScore = req.body.scores;
        var newfriend=req.body;
        console.log(userScore);
        console.log(req.body);
        var i=0;
        var chosenIndex1=0;
        var lastDistance=1110;
        function getIndex(){            
            if(i<friendData.length){
                console.log(distance(userScore,friendData[i].scores,10));
                if(distance(userScore,friendData[i].scores,10)<lastDistance){
                    lastDistance = distance(userScore,friendData[i].scores,10);
                    chosenIndex1 = i;
                };
                i++;
                getIndex();
            } else{
                console.log("This is the chosen: "+chosenIndex1);
                console.log("This is the smalles distance: "+lastDistance);
                res.json(friendData[chosenIndex1]);
                friend.addnewfriend(newfriend);
            };
        };
        getIndex();
        // for(var i = 0; i<friendData.length;i++){
        //     console.log(distance(userScore,friendData[i].scores,10));
        //     if(distance(userScore,friendData[i].scores,10)>lastDistance){
        //         lastDistance = distance(userScore,friendData[i].scores,10);
        //         chosenIndex = i;
        //     }
        // };

        // res.json(friendData[i]);
    });
    function distance(ArrayA,ArrayB,length){
        var result = 0
        for (var i=0; i<length;i++){
            result = result+ Math.abs(parseInt(ArrayA[i])-parseInt(ArrayB[i]))
        }
        return(result)
    };

};