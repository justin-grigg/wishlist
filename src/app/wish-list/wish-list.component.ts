import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  
  @Input() wishes : WishItem[] = [];

  toggleItem(e : Event): void
  {
    console.log(e);
  }

  toggleAnItem(item : WishItem)
  {
    console.log(item);
    item.isComplete = !item.isComplete;
  }

}
