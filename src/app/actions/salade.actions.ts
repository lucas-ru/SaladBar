import {Action, createAction} from '@ngrx/store';

export const increment = createAction('[salade] Increment');
export const decrement = createAction('[salade] Decrement');
export const reset = createAction('[salade] Reset');

export enum MyActionType {
  StartApp = '[salade] start App',
  AddIng = '[salade] Ajouter Ing',
  DeleteIng = '[salade] Supprimer Ing',
  ModifySauce = '[salade] modifier sauce',
  ModifyPrice = '[salade] modifier Prix',
  ModifyName = '[salade] modifier nom',
  ModifyReduc = '[salade] modifier reduction'
}

export class StartApp implements Action{
  readonly type = MyActionType.StartApp;
}

export class AddIng implements Action{
  readonly type = MyActionType.AddIng;
  constructor(public ing: {nom: string; prix: number}) {
  }
}

export class ModifySauce implements Action{
  readonly type = MyActionType.ModifySauce;
  constructor(public sauce: string) {
  }
}

export class ModifyPrice {
  readonly type = MyActionType.ModifyPrice;
  constructor(public prix: number) {
  }
}

export class ModifyName {
  readonly type = MyActionType.ModifyName;
  constructor(public nom: string) {
  }
}

export class ModifyReduc {
  readonly type = MyActionType.ModifyReduc;
  constructor(public reduction: number) {
  }
}

export type MyAction = StartApp | AddIng | ModifySauce | ModifyPrice | ModifyName | ModifyReduc;
