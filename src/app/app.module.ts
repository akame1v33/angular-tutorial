import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ReferenceTemplateVariableComponent } from './components/reference-template-variable/reference-template-variable.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralComponent } from './components/structural/structural.component';
import { PipeComponent } from './components/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EventBindingComponent,
    ReferenceTemplateVariableComponent,
    TwoWayBindingComponent,
    StructuralComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
