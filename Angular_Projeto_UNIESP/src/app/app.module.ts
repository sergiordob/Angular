import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ClienteModule } from "./pages/cliente/cliente.module";
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { ContaModule } from './pages/conta/conta.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        TelaInicialComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [provideNgxMask()],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        NgxMaskDirective,
        NgxMaskPipe,
        ClienteModule,
        ContaModule
    ]
})
export class AppModule { }