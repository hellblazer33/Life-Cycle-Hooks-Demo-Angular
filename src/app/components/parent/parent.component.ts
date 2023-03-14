import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  userName = 'Maria';
  isChildDestroyed = false;

  
 
   destroy() {
      this.isChildDestroyed = true;
   }

  updateUser() {
     this.userName = 'Chris';
  }

  ngOnInit() {
    console.log('ngOnInit from the parent component');
 }

}
