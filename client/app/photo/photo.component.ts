import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
})
export class PhotoComponent{

    @Input() url: string;
    @Input() titulo: string;
    descricao: string;
    _id: string;
}