import { Component, OnInit, Input } from '@angular/core';
import { GithubEvent } from 'src/app/models/event';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
    selector: 'app-editor-event',
    templateUrl: './editor-event.component.html',
    styleUrls: ['./editor-event.component.scss']
})
export class EditorEventComponent implements OnInit {
    @Input() public event: GithubEvent;

    constructor(public generator: GeneratorService) { }

    ngOnInit() {
    }

}
