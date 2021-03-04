import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//we need this because its the Reducer is the actual thing tha t writes to the state.
import { ShoppingReducer } from '../app/store/reducers/shopping.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './store/effects/shopping.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    StoreModule.forRoot({
      shopping: ShoppingReducer,
      
    }, {}),
    EffectsModule.forRoot([ShoppingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
