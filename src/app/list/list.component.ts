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

  public addToSelectedProvider(event, provider) {
    // get the index of provider and
    const providerIndex = this.unselectedProviders.indexOf(provider);

    // add provider to Selected Providers Array
    this.selectedProviders.push(provider);

    // remove provider to Selected Providers Array
    this.unselectedProviders.splice(providerIndex, 1);

    this.localStorageUpdate();
  }

  public removedFromSelectedProvider(event, provider) {
    const providerIndex = this.selectedProviders.indexOf(provider);
    this.unselectedProviders.push(provider);

    if (providerIndex >= 0){
      this.selectedProviders.splice(providerIndex, 1);
    }
    this.localStorageUpdate();
  }

  public localStorageUpdate() {
    localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
    localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
}

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

}
