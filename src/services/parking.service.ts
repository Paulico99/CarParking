import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class ParkingService {
    private db = firebase.database();
    constructor(public afd: AngularFireDatabase){}
        getPark(){
            let promise = new Promise((resolve, reject) =>{
                firebase.database().ref('/parking/').orderByKey().equalTo('-LFRJ1EjTAIwbFdgVCzZ').on('value', snap =>{
                    try{
                        resolve(this.snapshotToArray(snap));
                    }catch(err){
                        reject(err);
                    }  
                })
            })
            return promise
        }

        
  snapshotToArray(snapshot){
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
  } 
    
}