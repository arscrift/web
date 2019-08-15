import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PrincipalComponent } from './principal/principal.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavegacaoService } from './navegacao/navegacao.service';
import { CatalogoComponent } from './principal/catalogo/catalogo.component';
import { EventoComponent } from './principal/evento/evento.component';
import { ApresentacaoComponent } from './principal/apresentacao/apresentacao.component';
import { LazyLoadingIMGDirective } from './utilitarios/lazy-loading-img.directive';
import { CatalogoService } from './principal/catalogo/catalogo.service';
import { CartaoComponent } from './principal/catalogo/cartao/cartao.component';
import { PatrocinadorComponent } from './principal/evento/patrocinador/patrocinador.component';
import { ColaboradorComponent } from './principal/evento/colaborador/colaborador.component';
import { InscreverComponent } from './principal/evento/inscrever/inscrever.component';

@NgModule({
		declarations: [
		AppComponent,
		CabecalhoComponent,
		NavegacaoComponent,
		PrincipalComponent,
		RodapeComponent,
		CatalogoComponent,
		EventoComponent,
		ApresentacaoComponent,
		LazyLoadingIMGDirective,
		CartaoComponent,
		PatrocinadorComponent,
		ColaboradorComponent,
		InscreverComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [NavegacaoService, CatalogoService],
	bootstrap: [AppComponent]
})
export class AppModule { }