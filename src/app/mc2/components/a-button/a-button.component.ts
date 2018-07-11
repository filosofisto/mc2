import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-a-button',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.css']
})
export class AButtonComponent implements OnInit {
  @Input() click: EventEmitter<any>;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.click.emit();
  }
}
