import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from '../baseService';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {
    authURL = `http://localhost:3000/auth`;

    constructor(private h: HttpClient) {
        super(h);
    }

    login(loginObj: any) {
        let password = Md5.hashStr(loginObj.password);
        loginObj.password = password;

        const obj = {
            email: loginObj.email,
            password: loginObj.password
        }

        localStorage.setItem("userName", obj.email)
        return this.http.post(this.authURL, obj, {
            headers: this.getCommonHeaders(false)
        })
            .pipe(
                map((data: any) => {
                    //
                    if (data.status != "200") {
                        catchError(this.handleErrors);
                    }

                    localStorage.setItem("userId", data);
                    localStorage.setItem("token", data.token);

                    return data;
                }),
                catchError(this.handleErrors)
            );
    }
}
