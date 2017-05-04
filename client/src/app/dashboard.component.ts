import { Component, OnInit, Inject} from '@angular/core';
import { Router } from "@angular/router";

import { APP_CONFIG } from "./app-config.constants";
import { IAppConfig } from "./app-config.interface";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    constructor(
        private router: Router,
        @Inject( APP_CONFIG ) private config: IAppConfig
    ) { }

    ngOnInit(): void {
    }

}

