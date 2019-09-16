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
                document.getElementById('projects').scrollIntoView();

                if (fragment.includes("error")) {
                    console.log("Login Failed")
                    this.accessToken = null;
                    this.loginFailed = true;

                } else if (fragment.includes("access")) {

                    this.loginFailed = false;

                    // read access token
                    var start = fragment.indexOf("=", fragment.indexOf("access")) + 1;
                    var end = fragment.indexOf("&", start);
                    this.accessToken = fragment.substring(start, end);

                    this.spotifyService.getTopArtists(this.accessToken).subscribe(
                        data => {
                            console.log("Top Artists:\n", data);
                            this.topArtists = data;
                        },
                        error => {
                            console.log(error)
                        }
                    );

                    this.spotifyService.getTopTracks(this.accessToken).subscribe(
                        data => {
                            console.log("Top Tracks:\n", data);
                            this.topTracks = data;
                        },
                        error => {
                            console.log(error)
                        }
                    );
                }
            }
        })
    }
}
