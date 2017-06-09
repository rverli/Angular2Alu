import { Component } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { PhotoComponent } from '../photo/photo.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    
    photos: PhotoComponent[] = [];
    service: PhotoService;
    mensage: string = '';

    constructor(service: PhotoService) {

        this.service = service;

        this.service
            .list()
            .subscribe( 
                 photos => this.photos = photos, 
                 erro => console.log(erro)
            );
    }

    remove(photo: PhotoComponent) {

        //if( confirm('Confirma Exclusão da foto?') ) {   }
        
        this.service
            .remove(photo)
            .subscribe( 
                () => {
                    
                    let newPhotos = this.photos.splice(0);
                    let index = newPhotos.indexOf( photo );
                    newPhotos.splice( index, 1);
                    this.photos = newPhotos;

                    this.mensage = 'Foto removida com sucesso';
                }, 
                erro => {
                    console.log(erro)
                    this.mensage = 'Não foi possível remover a foto';
                });
    }
}