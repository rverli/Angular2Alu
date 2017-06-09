import { Pipe, PipeTransform } from '@angular/core';
import { PhotoComponent } from './photo.component';

@Pipe({
    name: 'filterByTitle'
})
export class FilterByTitle implements PipeTransform {

    transform( photos, digitado: string ) {        
        return photos.filter( f => f.titulo.toLowerCase().includes( digitado.toLowerCase() ) );
    }
}