import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatosDetail } from './candidatos-detail';

@Injectable({
    providedIn: 'root'
})

export class CandidatosService {
    private apiUrl: string = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json'
    constructror(private http: HttpClient) { }

    getCandidatos(): Observable<CandidatosDetail[]>{
        return this.http.get<CandidatosDetail[]>(this.apiUrl);
    }

    getCandidato(id: string): Observable<CandidatosDetail>{
        return this.http.get<CandidatosDetail>(this.apiUrl + '/' + id);
    }
}