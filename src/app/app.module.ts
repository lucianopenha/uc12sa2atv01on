import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { MuralVagasComponent } from './views/mural-vagas/mural-vagas.component';
import { CadastoVagasComponent } from './views/cadasto-vagas/cadasto-vagas.component';
import { CadastroVagasComponent } from './views/cadastro-vagas/cadastro-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MuralVagasComponent,
    CadastoVagasComponent,
    CadastroVagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
