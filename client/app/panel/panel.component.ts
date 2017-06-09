import { Component, Input, OnInit, ElementRef } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
   
    @Input() titulo: string;
    element: ElementRef;
    
    constructor(element: ElementRef) {

        this.element = element;
    }

    ngOnInit(): void {

        console.log(this.titulo);

        if(this.titulo) {
            this.titulo = this.titulo.length > 7 ? this.titulo.substr(0,7) + '...' : this.titulo;
        }
    }

    fadeOut(cb) {

        //$(this.element.nativeElement).fadeOut(cb);
    }
}