import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculationsListComponent} from '../calculations/components/calculations-list/calculations-list.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'calculations'},
    {path: 'calculations', component: CalculationsListComponent, pathMatch: 'full'}
    // {path: 'products', component: ProductsListComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
