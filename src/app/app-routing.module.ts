import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module')
            .then(m => m.HomeModule),
        pathMatch: 'full'
    },
    {
        path: 'detalle',
        loadChildren: () => import('./detalle/detalle.module')
            .then(m => m.DetalleModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }