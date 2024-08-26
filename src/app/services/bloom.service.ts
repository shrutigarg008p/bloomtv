import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class bloomService {
    constructor(private http: HttpClient) { }

    getCategoryAll() {
        return this.http.get<any>('https://bloomtv35.muvi.com/rest/getCategoryList/authToken/aa953738ca0ad337251cce64c8c74247/country_code/usa');
    }
    getCategoryVideo(permalink) {
        return this.http.get<any>('https://bloomtv35.muvi.com/rest/getContentList/authToken/aa953738ca0ad337251cce64c8c74247/permalink/'+permalink+'/country/usa');
    }
}