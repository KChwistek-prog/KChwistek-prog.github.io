import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpimsSensorsListComponent} from './rpims-sensors-list/rpims-sensors-list.component';

const routes: Routes = [
{path:'readings', component:RpimsSensorsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
