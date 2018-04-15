import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';

@Injectable()
export class EventosProvider {

    private PATH = 'e_data/';

    constructor(private db: AngularFireDatabase) {}

    getAll() {
        return this.db.list(this.PATH, ref => ref.orderByChild('data'))
        .snapshotChanges()
        .map(changes => {
            return changes.map(ev => ({ 
                key: ev.payload.key,
                ...ev.payload.val()
            }));
        })
    }

    get(key: string) {
        return this.db.object(this.PATH + key)
        .snapshotChanges()
        .map( ev => {
            return  { key: ev.key, ...ev.payload.val() };
        })
    }

}