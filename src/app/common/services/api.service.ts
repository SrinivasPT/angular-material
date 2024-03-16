import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private baseUrl = 'https://api-gateway.example.com'; // Replace with your Apigee API base URL

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        const token = this.getToken(); // Implement this method based on how you store/access tokens
        return new HttpHeaders({ Authorization: `Bearer ${token}` });
    }

    private handleError(error: any): Observable<never> {
        // You might want to extend this logic to handle different types of HTTP errors differently
        console.error('API request error:', error);
        // Optionally, you could use an error handling service to display user-friendly messages or send error details to a monitoring service.
        throw error;
    }

    public get(endpoint: string): Observable<any> {
        const headers = this.getHeaders();
        return this.http.get(`${this.baseUrl}/${endpoint}`, { headers }).pipe(catchError(this.handleError));
    }

    public post(endpoint: string, payload: any): Observable<any> {
        const headers = this.getHeaders();
        return this.http.post(`${this.baseUrl}/${endpoint}`, payload, { headers }).pipe(catchError(this.handleError));
    }

    public put(endpoint: string, payload: any): Observable<any> {
        const headers = this.getHeaders();
        return this.http.put(`${this.baseUrl}/${endpoint}`, payload, { headers }).pipe(catchError(this.handleError));
    }

    public delete(endpoint: string): Observable<any> {
        const headers = this.getHeaders();
        return this.http.delete(`${this.baseUrl}/${endpoint}`, { headers }).pipe(catchError(this.handleError));
    }

    private getToken(): string {
        // Example: Retrieve token from session storage
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            // Handle the case where the token is not available
            console.error('No token found');
        }
        return token || '';
    }
}
