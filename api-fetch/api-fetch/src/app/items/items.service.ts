import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  async getItems() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }
}