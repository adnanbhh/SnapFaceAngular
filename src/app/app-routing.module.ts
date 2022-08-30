import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFacePageComponent} from "./single-face-page/single-face-page.component";

const routes: Routes = [
  {path: 'mySnap/:id', component: SingleFacePageComponent},
  {path: 'mySnap', component: FaceSnapListComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule{}
