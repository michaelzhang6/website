import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-spotify-trends',
    templateUrl: './spotify-trends.component.html',
    styleUrls: ['./spotify-trends.component.css'],
})
export class SpotifyTrendsComponent implements OnInit {

    constructor(private spotifyService: SpotifyService, private route: ActivatedRoute,
        private dom: DomSanitizer) { }

    accessToken: String;
    topArtists: Object;
    topTracks: Object;
    loginFailed: Boolean = undefined;
    devLogin: Boolean = false;

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
                    document.getElementById('projects').scrollIntoView();
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

                    this.spotifyService.getTopArtists(this.accessToken).subscribe(
                        data => {
                            this.loginFailed = false;
                            console.log("Top Artists:\n", data);
                            this.topArtists = data;

                        },
                        error => {
                            console.log(error)
                            this.loginFailed = true;
                            this.accessToken = null;
                        }
                    );

                    this.spotifyService.getTopTracks(this.accessToken).subscribe(
                        data => {
                            this.loginFailed = false;
                            console.log("Top Tracks:\n", data);
                            this.topTracks = data;
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

    averageArtistPopularity() {
        var avg = 0;
        for (var artist in this.topArtists["items"]) {
            avg += this.topArtists["items"][artist]["popularity"]
        }
        return avg / this.topArtists["items"].length
    }

    averageTrackPopularity() {
        var avg = 0;
        for (var track in this.topTracks["items"]) {
            avg += this.topTracks["items"][track]["popularity"]
        }
        return avg / this.topTracks["items"].length
    }

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

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
}
