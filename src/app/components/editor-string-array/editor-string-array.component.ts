import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-editor-string-array',
    templateUrl: './editor-string-array.component.html',
    styleUrls: ['./editor-string-array.component.scss']
})
export class EditorStringArrayComponent implements OnInit {
    @Input() public values: string[];

    constructor() { }

    ngOnInit() {
    }

    public addValue(): void {
        this.values.push('');
    }

    public removeValue(value: string): void {
        const indexOf = this.values.indexOf(value);

        if (indexOf !== -1) {
            this.values.splice(indexOf, 1);
        }
    }
}
