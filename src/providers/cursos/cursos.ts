import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';

@Injectable()
export class CursosProvider {


    private PATH = 'c_data/';

    constructor(private db: AngularFireDatabase) { }

    getAll() {
        return this.db.list(this.PATH, ref => ref.orderByChild('semestre'))
            .snapshotChanges()
            .map(changes => {
                return changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val()
                }));
            })
    }

    getInfoC(){
        return this.db.list(this.PATH)
        .snapshotChanges()
        .map(changes => {
            return changes.map(c => ({
                key: c.payload.key,
                ...c.payload.val()
            }));
        })
    }

    get(key: string) {
        return this.db.object(this.PATH + key)
            .snapshotChanges()
            .map(c => {
                return { key: c.key, ...c.payload.val() };
            })
    }

    
}