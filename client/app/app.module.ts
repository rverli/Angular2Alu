import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { BotaoModule } from './botao/botao.module';
import { HttpModule } from '@angular/http';
import { PanelModule } from './panel/panel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';

@NgModule({
    imports:[ 
        BrowserModule, 
        PhotoModule, 
        HttpModule, 
        PanelModule,
        FormsModule,
        ReactiveFormsModule, 
        routing,
        BotaoModule 
              ],
    declarations:[ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap:[ AppComponent ]
})
export class AppModule {
    
}