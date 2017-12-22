import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Good } from '../models/good.model';

@Injectable()
export class GoodService {
    constructor(private http: Http) { }

    public getAllGoods(): Observable<Good[]> {
        return this.http.get('/api/goods')
            .map((response) => {
                return <Good[]>JSON.parse(response.text());
            })
    }

    public getGood(id: number): Observable<Good> {
        return this.http.get('/api/goods/' + id)
            .map((response) => {
                return <Good>JSON.parse(response.text());
            })
    }

    public addGood(good: Good): Observable<Good> {
        return this.http.post('/api/goods', good)
            .map((response: Response) => <Good>JSON.parse(response.text()));
    }

    public deleteGood(id: number): Observable<Good> {
        return this.http.delete('/api/goods/' + id)
            .map((response: Response) => <Good>JSON.parse(response.text()));
    }

    public editGood(good: Good): Observable<number> {
        return this.http.put('/api/goods/', good)
            .map((response: Response) => response.status);
    }

    public addGoodImage(goodId: number, image: File) {
        let formData: FormData = new FormData();
        formData.append('ImageForGood', image, image.name)

        return this.http.post('/api/goods/good-image/' + goodId, formData)
            .map((response: Response) => response.status);
    }

    public getGoodImage(id: number) {
        return this.http.get('/api/goods/good-image/' + id)
            .map((response) => response.json())
    }
}