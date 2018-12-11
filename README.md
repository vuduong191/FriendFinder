# Friend Finder - Node and Express Servers

### Overview

In this activity, I build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Besides Nodejs, this app uses Express web framework. Express is a minimal, open source and flexible Node.js web app framework designed to make developing websites, web apps, & API’s much easier.Express helps you respond to requests with route support so that you may write responses to specific URLs

**The simpole algorithm to determine the user's most compatible friend:**

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The closest match will be the user with the least amount of difference.

### Demo
![Demo](https://vuduong191.github.io/FriendFinder/images/demo.gif)