import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-spotify-trends',
    templateUrl: './spotify-trends.component.html',
    styleUrls: ['./spotify-trends.component.css'],
})
export class SpotifyTrendsComponent implements OnInit {

    constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

    // do not modify! Holds responses from Spotify Service
    topArtists: Object;
    topTracks: Object;
    userProfile: Object;
    accessToken: string;

    // login related
    loginFailed: Boolean = undefined;
    devLogin: Boolean = false;

    // arrays holding the displayed top artists and tracks
    shownTopArtists;
    shownTopTracks;
    displayNum = 6;

    // time period
    timePeriod;


    /**
     * Initializes the SpotifyTrends component by checking if login is valid. If
     * valid, display user's info. Otherwise prompt login.
     */
    ngOnInit() {
        if (window.location.href.includes("localhost")) {
            this.devLogin = true
        }

        this.route.fragment.subscribe((fragment: string) => {
            if (fragment == null) {
                return;
            } else {
                // scroll back to Projects
                if (fragment.includes("access")) {
                    document.getElementById('spotifyTrends').scrollIntoView({ block: 'start', behavior: 'smooth' });
                }

                if (fragment.includes("error")) {
                    console.log("Login Failed")
                    this.accessToken = null;
                    this.loginFailed = true;

                } else if (fragment.includes("access")) {

                    // read access token
                    var start = fragment.indexOf("=", fragment.indexOf("access")) + 1;
                    var end = fragment.indexOf("&", start);
                    this.accessToken = fragment.substring(start, end);

                    this.spotifyService.getUserProfile(this.accessToken).subscribe(
                        data => {
                            this.loginFailed = false;
                            console.log("User Profile:\n", data);
                            this.userProfile = data;
                        },
                        error => {
                            console.log(error)
                            this.loginFailed = true;
                            this.accessToken = null;
                        }
                    );
                }
            }
        })
    }

    /**
     * Brings up Login Window
     * 
     * dev - boolean representing if on dev server
     */
    login(dev: Boolean) {
        window.location.href = this.spotifyService.login(dev);
    }

    /**
     * 
     */
    getTopArtistsTracks(timeRange: string) {
        this.spotifyService.getTopArtists(this.accessToken, timeRange).subscribe(
            data => {
                this.loginFailed = false;
                console.log("Top Artists:\n", data);
                this.topArtists = data;
                this.shownTopArtists = data['items'].slice(0, this.displayNum);

            },
            error => {
                console.log(error)
                this.loginFailed = true;
                this.accessToken = null;
            }
        );

        this.spotifyService.getTopTracks(this.accessToken, timeRange).subscribe(
            data => {
                this.loginFailed = false;
                console.log("Top Tracks:\n", data);
                this.topTracks = data;
                this.shownTopTracks = data['items'].slice(0, this.displayNum);
            },
            error => {
                console.log(error)
                this.loginFailed = true;
                this.accessToken = null;
            }
        );

    }

    /**
     * Returns the average popularity of the artists in topArtists
     */
    averageArtistPopularity() {
        var avg = 0;
        for (var artist in this.topArtists["items"]) {
            avg += this.topArtists["items"][artist]["popularity"]
        }
        return (avg / this.topArtists["items"].length).toFixed(2);
    }

    /**
     * Returns the average popularity of the artists in topTracks
     */
    averageTrackPopularity() {
        var avg = 0;
        for (var track in this.topTracks["items"]) {
            avg += this.topTracks["items"][track]["popularity"]
        }
        return (avg / this.topTracks["items"].length).toFixed(2);
    }

    /**
     *  Returns the Artist name(s) from topTracks as a string  
     * 
     *  index - position of track in topTracks array
     */
    formatTrackArtists(index) {
        if (this.topTracks["items"][index]["artists"].length == 1) {
            return this.topTracks["items"][index]["artists"][0]["name"]
        } else {
            var acc = ""
            for (var artist in this.topTracks["items"][index]["artists"]) {
                if (artist == (this.topTracks["items"][index]["artists"].length - 1).toString()) {
                    acc += this.topTracks["items"][index]["artists"][artist]["name"];
                } else {
                    acc += this.topTracks["items"][index]["artists"][artist]["name"] + ", "
                }
            }
            return acc
        }
    }

    /**
     * Returns a string of num with commas 
     * 
     * num - the number to insert commas into
     */
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    /**
     * Scrolls element all the way to the right
     * 
     *  element - the DOM element 
     */
    scroll(element) {
        element.scrollLeft += element.scrollWidth;
    }

    /**
     * Scrolls element all the way back to the left
     * 
     *  element - the DOM element 
     */
    scrollBack(element) {
        element.scrollLeft -= element.scrollWidth;
    }

    /**
     * Shows/hides top artists
     */
    showArtists() {
        if (this.shownTopArtists.length > this.displayNum) {
            this.shownTopArtists = this.topArtists['items'].slice(0, this.displayNum);
            document.getElementById('Artists').scrollIntoView({ block: 'start', behavior: 'smooth' });
        } else {
            this.shownTopArtists = this.topArtists['items'];
        }
    }

    /**
     * Shows/hides top tracks
     */
    showTracks() {
        if (this.shownTopTracks.length > this.displayNum) {
            this.shownTopTracks = this.topTracks['items'].slice(0, this.displayNum);
            document.getElementById('Tracks').scrollIntoView({ block: 'start', behavior: 'smooth' });
        } else {
            this.shownTopTracks = this.topTracks['items'];
        }
    }
}
