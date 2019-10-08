import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) { }

    /**
     * Returns a string that is used to redirect the user to Spotify authentication
     * 
     * dev - boolean representing if on dev server
     */
    login(dev: Boolean) {
        return (dev) ? "https://accounts.spotify.com/authorize?client_id=0bbbb8a0172e460cbbdf9b278063e15f&response_type=token&scope=user-top-read&redirect_uri=http://localhost:4200/"
            : "https://accounts.spotify.com/authorize?client_id=0bbbb8a0172e460cbbdf9b278063e15f&response_type=token&scope=user-top-read&redirect_uri=https://michaelzhang6.github.io/website/"
    }

    /**
     * Returns GET request for user's top artists
     * 
     * token - authentication token
     */
    getTopArtists(token: string, timeRange: string) {
        const requestOptions = {
            headers: new HttpHeaders({
                'Authorization': "Bearer " + token
            }),
        };

        return this.http.get("https://api.spotify.com/v1/me/top/artists?limit=30&time_range=" + timeRange, requestOptions)
    }

    /**
     * Returns GET request for user's top tracks
     * 
     * token - authentication token
     */
    getTopTracks(token: string, timeRange: string) {
        const requestOptions = {
            headers: new HttpHeaders({
                'Authorization': "Bearer " + token
            }),
        };

        return this.http.get("https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=" + timeRange, requestOptions)
    }

    /**
     * Returns GET request for user's profile
     */
    getUserProfile(token) {
        const requestOptions = {
            headers: new HttpHeaders({
                'Authorization': "Bearer " + token
            }),
        };

        return this.http.get("https://api.spotify.com/v1/me", requestOptions)
    }

}
