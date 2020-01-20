import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    constructor(public generator: GeneratorService) { }

    ngOnInit() {
    }

}
