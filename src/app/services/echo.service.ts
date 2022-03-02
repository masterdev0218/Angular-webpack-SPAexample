import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EchoService {

  constructor(private httpClient: HttpClient) { }

  public makeCall(): Observable<any> {
		return this.httpClient.get<any>(
			'https://jsonplaceholder.typicode.com/posts'
		).pipe(
      take(1)
    );
	}
}
