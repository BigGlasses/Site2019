import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AccessService {

    constructor(private http: HttpClient) { }

    getData(next?: (value: CodeProject[]) => void, error?: (error: any) => void): void { // Next and error are run after a response is received.
        var options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }
        var url = "assets/data/projects.json";
        this.http.get(url, options).subscribe(
            next, error
        );
    }
}

export interface CodeProject{
    projectName : string,
    projectCodeName : string,
    repoLink : string,
    infoLink : string,
    websiteLink : string,
    imageCount : number,
    description : string,
    imageSources: string[],
    stack : string[],
    startYear : number,
    endYear: number
}


// const projects = ['current', 'accelskies', 'magichotel', 'overlord', 'rainbow', 'vanquest', 'lolcompare', 'samepage', 'comds', "c4m", "vanwyn"];
// const projectNames = ['Untitled Game', 'Accel Skies', 'Magic Hotel', 'Overlord (Nickname)', 'Rainbow Race', 'Vanquest', 'LoL Compare Stats', 'SamePage', 'ComDS Website', "CarFindingMachine", "VanWyn Website"];
// const projectNums = [ 10 ,9, 8, 7, 6,0, 1, 2, 3, 4, 5];
// const projectImages = [12, 11, 8, 11, 10, 9, 3, 4, 4, 3, 2];
// const projectDescriptions = ["", "", "", "", "", "", "", "", "", ""];

// // Current
// projectDescriptions[0] = "An extension of my Overlord game, with much of the code rewritten for optimization, and support for Python 3. This one features my own art, gameplay updates and a visual novel system for delivering story. It is still in development, and was originally set for release summer 2017. It was scrapped, but I liked the characters and decided to use them for a future project. Implemented UDP sockets to allow multiplayer. Created using Python and OpenGL.";
// // Accel Skies
// projectDescriptions[1] = "Another Disgaea themed game. You have to survive in a map with random objectives, and are given random items to help you complete the objectives. ";
// projectDescriptions[1] += "Created for the 2015 EPIC Game Challenge of McMaster University, it came out very well. I am proud of the game's efficient use of polymorphism. ";
// projectDescriptions[1] += "Different characters play very differently, and even enemies are very varied in attack patterns. ";
// projectDescriptions[1] += "The item and achievement system is inspired by the systems in another game, Risk of Rain. ";
// projectDescriptions[1] += "Players will unlock items by completing performance bases achievements. ";
// projectDescriptions[1] += "The items themselves can wildly alter playstyles, adding flavour to the gameplay. ";

// // Magic Hotel
// projectDescriptions[2] = "";
// projectDescriptions[2] += "A game I made to experiment with polymorphism. It is inspired by pokemon, so you basically battle monsters while managing a hotel. ";
// projectDescriptions[2] += "There are a variety of battle moves, abilities and mechanics that make battles challenging. ";
// projectDescriptions[2] += "I am not happy with the graphics, but I am happy with the stack system that controls the flow of battle. ";
// projectDescriptions[2] += "This one is unfinished because it was purely experimentation with classes, to the point where many sprites were taken from another one of my unfinished games. ";

// // Overlord
// projectDescriptions[3] = "A Disgaea themed board game. Win through friendship-breaking combat. This game was created because I liked a steam game (100% Orange Juice), but it was limited to 4 players. I ended up making a very similar game capable of many more concurrent players to play with friends. This was fun to make, as the mechanics are light-hearted. It runs very well, has AI, and a variety of new/altered mechanics compared to Orange Juice.";
// // Rainbow
// projectDescriptions[4] = "An MLP themed racing game I made in Grade 11 for a graded game contest. I am pretty proud of how this one turned out because it was the first program I ever made. The code is a nightmare, of course; at the time I had no idea what a class was, so there is a ton of repitition and clutter.";
// // VanQuest
// projectDescriptions[5] = "A game made in a very short time span. It's inspired by Super Amazing Wagon Adventure, and was created to play at school in the computer lab before the christmas break. The objective is to make a delivery, but the world wants to get rid of you and your friends. The multiplayer is very smooth, but tweaks to the script must be made with large volumes of players(>4). The graphics are basic. It was fun to use my imagination to cheaply represent enemies.";
// //lol compare
// projectDescriptions[6] = "A simple application that makes API calls based on inputed usernames. It draws stats from the server, and ranks players against each other. Makes API calls for game information using Java. Created using Android Studio.";
// //samepage
// projectDescriptions[7] = "Solo project created for a client. Educational application that asked users questions. Stored user information into a mySQL database using API endpoints.Android/iOS application created using Ionic, HTML, Javascript and XML.Back-end created using web2py, mySQL and Python.";
// //comds
// projectDescriptions[8] = "Worked in a team of 5 to design and develop a website for community members to plan events. Implemented website using bootstrap and ReactJS. Made responsive web pages, with support for mobile devices. Created API endpoints using Springboot, neo4j databases and Java.";
// //car for me
// projectDescriptions[9] = "Designed and developed a website for car buyers to find affordable cars. Created API endpoints using Springboot. Implemented website using Bootstrap 4 and jQuery. Uses a dataset of over 60k cars, and quickly finds the best cars for the user. Works on mobile devices. https://carfinding.azurewebsites.net/";
// //vanwyn
// projectDescriptions[10] = "Designed and developed a website for as a consultant for a startup company in Hamilton. Implemented googlemaps-js for a map simulation and java spring server backend for complex math calculations. Also implemented a login and administration system with java spring and mySQL database to allow client to protect certain content/pages.";
