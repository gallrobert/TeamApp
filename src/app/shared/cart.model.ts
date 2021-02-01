export class CartModel{
  public id: number;
  public projectName: string;
  public systemName: string;
  public status: string;
  public systemOwnerForPSA: string;
  public functionalSystemOwner: string;
  public technicalSystemOwner: string;
  public functionalDataSystemOwnerOldCO: string;
  public functionalDataSystemOwnerNewCO: string;
  public appOwnership: string;
  public infrastructureOwnership: string;
  public ictoNumber: string;
  public name: string;
  public applicationName: string;
  public applicationVersion: string;
  public applicationOwner: string;
  public wiki: string;

  constructor(id: number,
              projectName: string,
              systemName: string,
              status: string,
              systemOwnerForPSA: string,
              functionalSystemOwner: string,
              technicalSystemOwner: string,
              functionalDataSystemOwnerOldCO: string,
              functionalDataSystemOwnerNewCO: string,
              appOwnership: string,
              infrastructureOwnership: string,
              ictoNumber: string,
              name: string,
              applicationName: string,
              applicationVersion: string,
              applicationOwner: string,
              wiki: string,
  ) {
    this.id = id ;
    this.projectName = systemName;
    this.systemName = systemName;
    this.status = status;
    this.systemOwnerForPSA = systemOwnerForPSA;
    this.functionalSystemOwner = functionalSystemOwner;
    this.technicalSystemOwner = technicalSystemOwner;
    this.functionalDataSystemOwnerOldCO = functionalDataSystemOwnerOldCO;
    this.functionalDataSystemOwnerNewCO = functionalDataSystemOwnerNewCO;
    this.appOwnership = appOwnership;
    this.infrastructureOwnership = infrastructureOwnership;
    this.ictoNumber = ictoNumber;
    this.name = name;
    this.applicationName = applicationName;
    this.applicationVersion = applicationVersion;
    this.applicationOwner = applicationOwner;
    this.wiki = wiki;
  }
}
