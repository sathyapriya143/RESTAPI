import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childhooks',
  templateUrl: './childhooks.component.html',
  styleUrls: ['./childhooks.component.css']
})

export class ChildhooksComponent implements OnInit,
 OnDestroy, 
 OnChanges,
 DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked{
@ContentChild('projectedContent')projectedContent:any;
  //counter = 0;
  // interval: any;
  @Input()
  name = " ";
  constructor() {
    console.log("child constructor working")
  }
  ngOnInit(): void {
    console.log("child oninit working");

    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('child component Onchanges working');
  }
  ngDoCheck(): void {
    console.log('child Docheck');
  }
  ngAfterContentInit(): void {
    console.log('child afterinit content ');
  }
  ngAfterContentChecked(): void {
    console.log( 'child Aftercheckcontent');
  }
  ngAfterViewInit(): void {
    console.log('AfterviewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('Afterciewchecked');
  }
  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log('child component destroyed');


  }
}
