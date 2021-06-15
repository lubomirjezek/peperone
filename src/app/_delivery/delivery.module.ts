import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { SharedModule } from 'app/shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DeliveryRoutingModule,
        SharedModule
    ],
    declarations: [
        RootComponent
    ]
})
export class DeliveryModule { }
