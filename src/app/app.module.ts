import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ReferenceTemplateVariableComponent } from './components/reference-template-variable/reference-template-variable.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralComponent } from './components/structural/structural.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ServiceComponent } from './components/service/service.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EventBindingComponent,
    ReferenceTemplateVariableComponent,
    TwoWayBindingComponent,
    StructuralComponent,
    PipeComponent,
    ComponentInteractionComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
