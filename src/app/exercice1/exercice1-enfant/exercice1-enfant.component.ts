import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number;

  @Output() addEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  add():void {
    this.addEmitter.emit();
  }

  remove():void {
    this.removeEmitter.emit();
  }

}
