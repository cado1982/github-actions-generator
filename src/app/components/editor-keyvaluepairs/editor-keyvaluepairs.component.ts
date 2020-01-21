import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyValuePair } from 'src/app/models/keyValuePair';

@Component({
    selector: 'app-editor-keyvaluepairs',
    templateUrl: './editor-keyvaluepairs.component.html',
    styleUrls: ['./editor-keyvaluepairs.component.scss']
})
export class EditorKeyValuePairsComponent implements OnInit {
    @Input() public values: KeyValuePair[];
    @Output() public add = new EventEmitter<void>();
    @Output() public remove = new EventEmitter<KeyValuePair>();

    constructor() { }

    ngOnInit() {
    }
}
