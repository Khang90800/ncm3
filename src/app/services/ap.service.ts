import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApService {

  apSubject = new Subject<any[]>();

  private apProperties = [];

  
  constructor(private httpClient: HttpClient) {}

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

  addAp(inputIdAddApForm: string, inputLabelAddApForm: string) {
    const apObject = {
      id: 0,
      label: ''
    };
    apObject.id = this.apProperties.length + 1;
    apObject.label = inputLabelAddApForm;
    this.apProperties.push(apObject);
    this.emitApSubject();

    this.httpClient
      .put('https://ncm3-ae536.firebaseio.com/ap.json', this.apProperties)
      .subscribe(
        () => {
          console.log('Save successful!');
        },
        (error) => {
          console.log('Error!: ' + error);
        }
      );
  }

  updateAp(i) {
  }

  saveApToServer() {
    this.httpClient
      .put('https://ncm3-ae536.firebaseio.com/ap.json', this.apProperties)
      .subscribe(
        () => {
          console.log('Save successful!');
        },
        (error) => {
          console.log('Error!: ' + error);
        }
      );
  }

  getApFromServer() {
    this.httpClient
      .get<any[]>('https://ncm3-ae536.firebaseio.com/ap.json')
      .subscribe(
        (response) => {
          this.apProperties = response;
          this.emitApSubject();
        },
        (error) => {
          console.log('Error!: ' + error);
        }
      );
  }
}