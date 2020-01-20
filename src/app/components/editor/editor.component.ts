import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    constructor(public generator: GeneratorService) { }

    ngOnInit() {
    }

    public onModelChange() {
        this.generator.generate();
    }



}
