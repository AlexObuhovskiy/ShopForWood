import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Good } from "../models/good.model";

@Injectable()
export class GoodService {
    constructor(private http: HttpClient) { }

    public getAllGoods(): Observable<Good[]> {
        return this.http.get("/api/goods")
            .map((response) => {
                return <Good[]>response;
            });
    }

    public getGood(id: number): Observable<Good> {
        return this.http.get("/api/goods/" + id)
            .map((response) => {
                return <Good>response;
            });
    }

    public addGood(good: Good): Observable<Good> {
        return this.http.post("/api/goods", good)
            .map((response: Object) => { return <Good>response; });
    }

    public deleteGood(id: number): Observable<Good> {
        return this.http.delete("/api/goods/" + id)
            .map((response) => <Good>response);
    }

    public editGood(good: Good): Observable<number> {
        return this.http.put("/api/goods/", good)
            .map((response) => {
                console.log(response);
                return 0;
            });
    }

    public addGoodImage(goodId: number, image: File): Observable<number> {
        let formData: FormData = new FormData();
        formData.append("ImageForGood", image, image.name);

        return this.http.post("/api/goods/good-image/" + goodId, formData)
            .map((response) => {
                console.log(response);
                return 0;
            });
    }
}