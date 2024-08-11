import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // properties

  items : WishItem[] = [
    new WishItem("learn angular", false),
    new WishItem("get coffee", true),
    new WishItem("find self cutting grass", false),
  ];

  listFilter : any = '0';

  title = 'wishlist';

  newWishText = '';

  //visibleItems : WishItem[] = this.items;

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
    /*
    let value = this.listFilter;

    switch(value){
      case '1':
        return this.items.filter(item => !item.isComplete);
      case '2':
        return this.items.filter(item => item.isComplete);
      default:
        return this.items;
    }
        */
  //}
  // methods

  addNewWish(){
    // todo: add wish to items array
    this.items.push(new WishItem(this.newWishText));
    
    // clear textbox
    this.newWishText = '';
  }

  toggleItem(e : Event): void
  {
    console.log(e);
  }

  toggleAnItem(item : WishItem)
  {
    console.log(item);
    item.isComplete = !item.isComplete;
  }

  /* removing as no longer using NgModel change event*/
  //filterChanged(value: any)
  //{
  //  switch(value){
  //    case '1':
  //      this.visibleItems = this.items.filter(item => !item.isComplete);
  //      break;
  //    case '2':
  //      this.visibleItems = this.items.filter(item => item.isComplete);
  //      break;
  //    default:
  //      this.visibleItems = this.items;
  //  }
 // }
}
