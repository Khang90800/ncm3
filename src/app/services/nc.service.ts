import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NcService {

  ncSubject = new Subject<any[]>();

  private ncProperties = [];

  
  constructor(private httpClient: HttpClient) {}

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

  addNc(inputIdAddNcForm: string, inputLabelAddNcForm: string) {
    const ncObject = {
      id: 0,
      label: ''
    };
    ncObject.id = this.ncProperties.length + 1;
    ncObject.label = inputLabelAddNcForm;
    this.ncProperties.push(ncObject);
    this.emitNcSubject();
  }

  updateNc(i) {
  }

  saveNcToServer() {
    this.httpClient
      .put('https://ncm3-ae536.firebaseio.com/nc.json', this.ncProperties)
      .subscribe(
        () => {
          console.log('Save successful!');
        },
        (error) => {
          console.log('Error!: ' + error);
        }
      );
  }

  getNcFromServer() {
    this.httpClient
      .get<any[]>('https://ncm3-ae536.firebaseio.com/nc.json')
      .subscribe(
        (response) => {
          this.ncProperties = response;
          this.emitNcSubject();
        },
        (error) => {
          console.log('Error!: ' + error);
        }
      );
  }
}