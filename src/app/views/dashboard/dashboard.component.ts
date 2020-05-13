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
  constructor(
    private itemService : ItemService
  ) { 
    
  }

  ngOnInit(): void {
    this.loadItem();
  }
  loadItem(){
    this.itemService.getAllItems().subscribe(dataItem =>{
      this.items = dataItem;
    })
  }

}
