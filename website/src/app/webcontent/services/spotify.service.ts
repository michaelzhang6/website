import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) { }

    login() {
        return this.http.get("https://accounts.spotify.com/authorize?client_id=0bbbb8a0172e460cbbdf9b278063e15f&response_type=token&redirect_uri=https:%2F%2Fmichaelzhang6.github.io%2Fwebsite%2F%23projects")
    }

    getTopArtists(token) {
        const headerDict = {
            'Authorization': "Bearer " + token
        };
        const requestOptions = {
            headers: new HttpHeaders(headerDict),
        };

        return this.http.get("https://api.spotify.com/v1/me/top/artists", requestOptions)
    }

    getTopTracks(token) {
        const headerDict = {
            'Authorization': "Bearer " + token
        };
        const requestOptions = {
            headers: new HttpHeaders(headerDict),
        };

        return this.http.get("https://api.spotify.com/v1/me/top/tracks", requestOptions)
    }

}
