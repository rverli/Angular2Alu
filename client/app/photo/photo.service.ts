import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { PhotoComponent } from './photo.component';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoService {

    http: Http;
    headers = new Headers();
    photos: PhotoComponent[] = [];
    photo: PhotoComponent = new PhotoComponent();
    url: string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    save( photo: PhotoComponent ): Observable<MensagemCadastro> {

        let photoJson = JSON.stringify( photo );

        if( photo._id ) {
            return this.http
                       .put( this.url + '/' + photo._id, photoJson, { headers: this.headers } )
                       .map( () => new MensagemCadastro( 'Foto alterada com sucesso', false ) );
        } else {
            return this.http
                       .post( this.url, photoJson, { headers: this.headers } )
                       .map( () => new MensagemCadastro( 'Foto adicionada com sucesso', true ) );
        }
    }

    list(): Observable<PhotoComponent[]> {
         
        return this.http
                   .get( this.url )
                   .map( res => res.json() );
    }

    remove(photo: PhotoComponent): Observable<Response> {
        return this.http.delete( this.url + '/' + photo._id );
    }

    findById(id: string): Observable<PhotoComponent> {
        return this.http
                .get(this.url + '/' + id)
                .map( res => res.json() );
    }
}

export class MensagemCadastro {

    private _mensagem: string;
    private _inclusao: boolean;

    constructor( mensagem: string, inclusao: boolean ) {
        this._mensagem = mensagem;
        this._inclusao = inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {
        return this._inclusao;
    }
}