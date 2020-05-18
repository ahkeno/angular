import { Component,OnInit,ChangeDetectorRef,OnChanges } from '@angular/core';
import { Observable, of ,Subject,interval} from 'rxjs';
import { distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { Item } from './../../models/item';
import { ItemService } from './../../services/items.service';
import { WrappedCollection } from './../../services/wrapped.collection';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: any;
  loadData : boolean;
  constructor(
    private itemService : ItemService
  ) { 
    
  }

  ngOnInit(): void {
    //this.loadItem();
  }
  loadItem(){
    let that = this;
    this.itemService.getAllItems().subscribe(dataItem =>{
      this.items = dataItem;
      if(this.items){
        that.loadData = true;
      }else {
        that.loadData = false;
      }
    })
    
  }

}
