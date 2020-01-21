import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnvironmentVariable } from 'src/app/models/environmentVariable';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
    selector: 'app-editor-environments',
    templateUrl: './editor-environments.component.html',
    styleUrls: ['./editor-environments.component.scss']
})
export class EditorEnvironmentsComponent implements OnInit {
    @Input() public environments: EnvironmentVariable[];
    @Output() public add = new EventEmitter<void>();
    @Output() public remove = new EventEmitter<EnvironmentVariable>();

    constructor(public generator: GeneratorService) { }

    ngOnInit() {
    }
}
