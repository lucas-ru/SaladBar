import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { MyActionType} from '../actions/salade.actions';
import {Observable} from "rxjs";
import {StartApp} from "../actions/salade.actions";

/*@Injectable()
export class SaladeEffect {
  StartApp$: Observable<Action> = createEffect(() => {
    ofType(MyActionType.StartApp)
    return this.actions$.pipe(map(() => new StartApp() ));
})
  constructor(private actions$: Actions) {}
}*/
