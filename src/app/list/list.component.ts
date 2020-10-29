import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];
  constructor() {}


  ngOnInit() {
    const local_unselectedProviders = localStorage.getItem('unselectedProviders');
    const local_selectedProviders   = localStorage.getItem('selectedProviders');
    if (local_unselectedProviders && local_unselectedProviders !== '') {
      this.unselectedProviders = JSON.parse(local_unselectedProviders);
    }
    if (local_selectedProviders && local_selectedProviders !== '') {
      this.selectedProviders = JSON.parse(local_selectedProviders);
    }
  }
  
  public addToSelectedProviders(event, provider) {
    this.selectedProviders.push(provider);
    this.removeFromUnselectedProviders(provider);
    this.localStorageUpdate();
  }

  public addToUnselectedProviders(event, provider) {
    this.unselectedProviders.push(provider);
    this.removeFromSelectedProviders(provider);
    this.localStorageUpdate();
  }

  
  public removeFromUnselectedProviders(provider) {
    const providerIndex = this.unselectedProviders.indexOf(provider);
    if (providerIndex >= 0) {
      this.unselectedProviders.splice(providerIndex, 1);
    }
  }

  public removeFromSelectedProviders(provider) {
    const providerIndex = this.selectedProviders.indexOf(provider);
    if (providerIndex >= 0) {
      this.selectedProviders.splice(providerIndex, 1);
    }
  }

  public localStorageUpdate() {
    localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
    localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
  }


}
