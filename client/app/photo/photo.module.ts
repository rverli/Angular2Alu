import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { FilterByTitle } from './photo.pipes';
import { PhotoService } from './photo.service';

@NgModule({
    declarations:[ PhotoComponent, FilterByTitle ],
    exports:[ PhotoComponent, FilterByTitle ],
    providers: [ PhotoService ]
})
export class PhotoModule {
    
}