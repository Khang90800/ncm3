import { Subject } from 'rxjs';

export class ApService {

  apSubject = new Subject<any[]>();

  private apProperties = [
    {
      id: 1,
      label: 'pdââ'
    },
    {
      id: 2,
      label: 'aamamamma'
    },
    {
      id: 3,
      label: 'ozpdjapdja'
    },
  ];

  getApById(id: number) {
    const searchedApId = this.apProperties.find(
      (apObject) => {
        return apObject.id === id;
      }
    );
    return searchedApId;
  }

  emitApSubject() {
    this.apSubject.next(this.apProperties.slice());
  }

  addAp(inputLabelAddApForm: string) {
    const apObject = {
      id: 0,
      label: ''
    };
    apObject.label = inputLabelAddApForm;
    apObject.id = this.apProperties[(this.apProperties.length - 1)].id + 1;
    this.apProperties.push(apObject);
    this.emitApSubject();

  }
}