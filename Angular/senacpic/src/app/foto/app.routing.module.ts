import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoRegistroComponent } from '../foto-regis';

const routes : Routes = [
    { path: 'form', component: FotoRegistroComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}