import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculationsListComponent} from '../calculations/components/calculations-list/calculations-list.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SecurityModule} from '../security/security.module';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'calculations'},
    {path: 'calculations', component: CalculationsListComponent, pathMatch: 'full'}
    // {path: 'products', component: ProductsListComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        SecurityModule
    ],
    exports: [
        RouterModule,
        NavigationComponent
    ]
})
export class AppRoutingModule {
}
