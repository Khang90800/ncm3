import { Subject } from 'rxjs';

export class NcService {

  ncSubject = new Subject<any[]>();

  private ncProperties = [
    {
      id: 1,
      label: 'hozoei'
    },
    {
      id: 2,
      label: 'ojzdzede'
    },
    {
      id: 3,
      label: 'cnklncs'
    },
  ];

  getNcById(id: number) {
    const searchedNcId = this.ncProperties.find(
      (ncObject) => {
        return ncObject.id === id;
      }
    );
    return searchedNcId;
  }

  emitNcSubject() {
    this.ncSubject.next(this.ncProperties.slice());
  }

  addNc(inputLabelAddNcForm: string) {
    const ncObject = {
      id: 0,
      label: ''
    };
    ncObject.label = inputLabelAddNcForm;
    ncObject.id = this.ncProperties[(this.ncProperties.length - 1)].id + 1;
    this.ncProperties.push(ncObject);
    this.emitNcSubject();
  }
}