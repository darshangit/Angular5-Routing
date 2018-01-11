import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: 'welcome', component: WelcomeComponent}, // order matters
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent} // for default route
      ], {useHash: true}) // using hasbased URL will make us bookmark pages.everything after the # will be ignored
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
