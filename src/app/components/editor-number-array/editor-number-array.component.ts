import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-editor-number-array',
    templateUrl: './editor-number-array.component.html',
    styleUrls: ['./editor-number-array.component.scss']
})
export class EditorNumberArrayComponent implements OnInit {
    @Input() public values: { value: number }[];

    constructor() { }

    ngOnInit() {
    }

    public addValue(): void {
        this.values.push({ value: 0 });
    }

    public removeValue(value: { value: number }): void {
        const indexOf = this.values.indexOf(value);

        if (indexOf !== -1) {
            this.values.splice(indexOf, 1);
        }
    }
}
