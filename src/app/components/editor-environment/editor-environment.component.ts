import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnvironmentVariable } from 'src/app/models/environmentVariable';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
    selector: 'app-editor-environment',
    templateUrl: './editor-environment.component.html',
    styleUrls: ['./editor-environment.component.scss']
})
export class EditorEnvironmentComponent implements OnInit {
    @Input() public environment: EnvironmentVariable;
    @Output() public remove = new EventEmitter<EnvironmentVariable>();

    constructor(public generator: GeneratorService) { }

    ngOnInit() {

    }
}
