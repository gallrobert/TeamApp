import {CartModel} from './cart.model';

export class CartService{
  private projects: CartModel[] = [
    { id: 1,
      projectName: 'Edua',
      systemName: '',
      status: '',
      systemOwnerForPSA: '',
      functionalSystemOwner: '',
      technicalSystemOwner: '',
      functionalDataSystemOwnerOldCO: '',
      functionalDataSystemOwnerNewCO: '',
      appOwnership: '',
      infrastructureOwnership: '',
      ictoNumber: '4564826426426426',
      name: '',
      applicationName: '',
      applicationVersion: '',
      applicationOwner: '',
      wiki: '',
    },
    { id: 2 ,
      projectName: 'Abp',
      systemName: '',
      status: '',
      systemOwnerForPSA: '',
      functionalSystemOwner: '',
      technicalSystemOwner: '',
      functionalDataSystemOwnerOldCO: '',
      functionalDataSystemOwnerNewCO: '',
      appOwnership: '',
      infrastructureOwnership: '',
      ictoNumber: '4654648',
      name: '',
      applicationName: '',
      applicationVersion: '',
      applicationOwner: '',
      wiki: 'ahoj',
    }
  ];
  // tslint:disable-next-line:typedef
  getProject(){
    return this.projects;
  }
}
