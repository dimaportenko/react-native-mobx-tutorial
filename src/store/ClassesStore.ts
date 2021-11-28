import { ClassItemType } from "../types";
import { makeAutoObservable } from "mobx";

export class ClassesStore {
  items: ClassItemType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  updateItem(newItem: ClassItemType) {
    const foundItem = this.items.find(item => item.id === newItem.id);
    if (foundItem) {
      this.items = this.items.map(item => {
        if (item.id === newItem.id) {
          return newItem;
        }
        return item;
      })
    } else {
      this.items = [...this.items, newItem];
    }
  }

  deleteItem(itemToRemove: ClassItemType) {
    this.items = this.items.filter(item => item.id !== itemToRemove.id);
  }
}
