import { Subject } from 'rxjs';

export class AdService {

  adSubject = new Subject<any[]>();

  private adProperties = [
    {
      id: 1,
      label: 'daza'
    },
    {
      id: 2,
      label: 'loi'
    },
    {
      id: 3,
      label: 'lilio'
    },
  ];

  getAdById(id: number) {
    const searchedAdId = this.adProperties.find(
      (adObject) => {
        return adObject.id === id;
      }
    );
    return searchedAdId;
  }

  emitAdSubject() {
    this.adSubject.next(this.adProperties.slice());
  }

  addAd(inputLabelAddAdForm: string) {
    const adObject = {
      id: 0,
      label: ''
    };
    adObject.label = inputLabelAddAdForm;
    adObject.id = this.adProperties[(this.adProperties.length - 1)].id + 1;
    this.adProperties.push(adObject);
    this.emitAdSubject();

  }
}