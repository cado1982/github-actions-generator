import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyValuePair } from 'src/app/models/keyValuePair';

@Component({
    selector: 'app-editor-keyvaluepair',
    templateUrl: './editor-keyvaluepair.component.html',
    styleUrls: ['./editor-keyvaluepair.component.scss']
})
export class EditorKeyValuePairComponent implements OnInit {
    @Input() public value: KeyValuePair;
    @Output() public remove = new EventEmitter<KeyValuePair>();

    constructor() { }

    ngOnInit() {

    }
}
