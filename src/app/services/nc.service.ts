import { Subject } from 'rxjs';

export class NcService {

  ncSubject = new Subject<any[]>();

  private ncProperties = [
    {
      id: 1,
      label: 'chien'
    },
    {
      id: 2,
      label: 'chat'
    },
    {
      id: 3,
      label: 'moineau'
    },
    {
      id: 4,
      label: 'poule'
    },
    {
      id: 5,
      label: 'lion'
    },
    {
      id: 6,
      label: 'canard'
    },
    {
      id: 7,
      label: 'cochon'
    },
    {
      id: 8,
      label: 'dinde'
    },
    {
      id: 9,
      label: 'renard'
    },
    {
      id: 10,
      label: 'éléphant'
    },
    {
      id: 11,
      label: 'rhinocéros'
    },
    {
      id: 12,
      label: 'fourmi'
    },
    {
      id: 13,
      label: 'abeille'
    },
    {
      id: 14,
      label: 'requin'
    }
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