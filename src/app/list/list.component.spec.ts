import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('Add provider to  selectedProviders',() =>{
    it('should add provider to selectedProviders', () => {

      const provider = {
        id: '1',
        name: 'John',
        address: '123 Greenway Blvd',
        phone: '8991234321'
      }
      component.addToSelectedProvider(null, provider);

      expect(component.selectedProviders.length).toEqual(1);
    });

  });

  describe('Remove provider to  unselectedProviders',() =>{
    it('should remove provider to unselectedProviders', () => {

      const provider = {
        id: '1',
        name: 'John',
        address: '123 Greenway Blvd',
        phone: '8991234321'
      }
      component.removedFromSelectedProvider(null, provider);

      expect(component.unselectedProviders.length).toEqual(4);
    });
    
  });

});
