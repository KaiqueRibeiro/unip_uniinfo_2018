import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';

@Injectable()
export class LocaisProvider {

    private PATH = 'l_data/';

    constructor(private db: AngularFireDatabase) {}
    
        getAll() {
            return this.db.list(this.PATH,  ref => ref.orderByChild('ambiente'))
            .snapshotChanges()
            .map(changes => {
                return changes.map(l => ({ 
                    key: l.payload.key,
                    ...l.payload.val()
                }));
            })
        }
    
        get(key: string) {
            return this.db.object(this.PATH + key)
            .snapshotChanges()
            .map( l => {
                return  { key: l.key, ...l.payload.val() };
            })
        }
}