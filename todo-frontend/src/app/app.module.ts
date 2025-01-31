import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodosModule } from './features/todos/todos.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        TodosModule,
    ],
    providers: [provideHttpClient(
        withFetch(),
    )],
    bootstrap: [AppComponent]
})
export class AppModule { }