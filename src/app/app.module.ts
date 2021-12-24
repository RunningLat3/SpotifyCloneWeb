import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components and Modules
import { AppComponent } from './app.component';
import { SideBarComponent } from './pages/shared/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Services
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [AppComponent, SideBarComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
