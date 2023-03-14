import { Component, Input, OnInit,OnChanges,SimpleChanges,DoCheck, AfterContentChecked, AfterContentInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges,OnInit,DoCheck,AfterContentChecked,OnDestroy {

  @Input() userName = '';

  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges triggered', changes);
 }

 ngOnInit() {
  console.log('ngOnInit from the child component');
}

ngDoCheck() {
  console.log('ngDoCheck triggered');
}


ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked triggered');
}

ngOnDestroy(): void {
  console.log('Child component is destroyed! :(');
}

}
