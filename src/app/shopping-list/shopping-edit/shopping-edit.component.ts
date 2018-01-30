import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // ingredient: Ingredient = {name: '', amount: 0};
  @ViewChild('f') shopingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(index => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shopingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.resetForm();
  }

  onClear() {
    this.shopingListForm.resetForm();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
