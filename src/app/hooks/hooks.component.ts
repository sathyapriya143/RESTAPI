import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck ,AfterContentInit,AfterViewInit{
  isChild = true;
  name = '';
  constructor() {
    console.log(" parent constructor working")
  }
  
  
  ngOnInit(): void {
    console.log(" parent Oninit working")
  }
  ngOnChanges(): void {
    console.log('parent component changes');
  }
  ngDoCheck(): void {
    console.log('parent Docheck called');
  }
  ngAfterContentInit(): void {
    console.log(' parent Aftercontent init');
  }
  ngAfterViewInit(): void {
    console.log(' parent Afterinit called');
  }
  toggle() {
    this.isChild = !this.isChild;
  }
}
