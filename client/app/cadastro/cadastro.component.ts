import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    
    photo: PhotoComponent = new PhotoComponent();    
    myForm: FormGroup;
    service: PhotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';
    
    constructor(service: PhotoService, private fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe( params => this.findPhotoById( params['id'] ) );

        this.myForm = this.fb.group({
            titulo: ['', Validators.compose([ Validators.required, Validators.minLength(4) ]) ],
            url: ['', Validators.required ],
            descricao: ['']
        });
    }

    findPhotoById( id: string ): void {

        if( id ) {
            this.service.findById( id )
                .subscribe(
                    f => this.photo = f,
                    erro => {
                        console.log(erro);
                        this.mensagem = 'Não foi possível obter a foto por ID';
                    }
                );    
        }
    }

    save(event) {

        event.preventDefault();

        this.service
            .save( this.photo )
            .subscribe( res => {
                this.photo = new PhotoComponent();
                this.mensagem = res.mensagem;

                if(!res.inclusao) {
                    this.router.navigate(['']);    
                }
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível salvar a foto';
            });
    }
}