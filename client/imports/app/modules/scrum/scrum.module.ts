import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { ScrumRoutingModule } from "./scrum-routing.module";
import { SummeryComponent } from "./summery/summery.component";
import { CardComponent } from "./card/card.component";

@NgModule({
    imports: [
        SharedModule,
        ScrumRoutingModule
    ],
    declarations: [SummeryComponent, CardComponent],
    providers: []
})
export class ScrumModule {
}
