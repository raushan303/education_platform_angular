import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import 'hammerjs';
// import { importType } from '@angular/compiler/src/output/output_ast';
// import { from } from 'rxjs';
// import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { CoursesComponent } from './courses/courses.component';
import {MatIconModule} from '@angular/material/icon';
import { SubjectsService } from './services/subjects.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterService } from './services/chapter.service';
import { HighlightDirective } from './directives/highlight.directive';
import { TopicsComponent } from './topics/topics.component';
import { TopicService } from './services/topic.service';
import { HomeComponent } from './home/home.component';

import { LocationService } from "./services/location.service";
import { UserService } from "./services/user.service";
import { FormpostService } from "./services/formpost.service";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SubtopicComponent } from './subtopic/subtopic.component';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ChaptersComponent,
    CoursesComponent,
    HighlightDirective,
    TopicsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SubtopicComponent
  ],
  providers: [
    ProcessHTTPMsgService,
    SubjectsService,
    ChapterService,
    TopicService,
    LocationService,
    UserService,
    FormpostService,
    {provide: 'baseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
