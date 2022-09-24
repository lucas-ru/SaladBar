import {ActionReducer, createFeatureSelector, createReducer, createSelector} from '@ngrx/store';
import {MyAction, MyActionType} from '../actions/salade.actions';

export interface Salade {
  id: number;
  nom: string;
  prix: number;
  ingredients: Array<{nom: string;prix: number}>;
  sauce: string;
  reduction: number;
}

const initialState: Salade = {
  id: 1,
  nom: 'Printanière',
  prix: 11.99,
  ingredients: [],
  sauce: 'vinaigrette',
  reduction: 0
};

// console.log
export function logger(reducer: ActionReducer<Salade>): ActionReducer<Salade> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export function saladeReducer(state: Salade = initialState, action: MyAction): Salade {
  switch (action.type){
    case MyActionType.StartApp:
      return {...initialState};
    case MyActionType.AddIng:
      const ingredients = [...state.ingredients, action.ing];
      return {
        ...state,
        ingredients,
        prix: state.prix + action.ing.prix
      };
    case MyActionType.ModifyName:
      return {
        ...state,
        nom: state.nom
      };
    case MyActionType.ModifyPrice:
      return {
        ...state,
        prix: state.prix
      };
    case MyActionType.ModifyReduc:
      return {
        ...state,
        reduction: state.reduction
      };
    case MyActionType.ModifySauce:
      return {
        ...state,
        sauce: state.sauce
      };
    default:
      return state;
  }
}

//on(increment, (state) => state + 1),
//on(decrement, (state) => state - 1),
//on(reset, (state) => 0)

export const selectFeature = createFeatureSelector<Salade>('salade');
export const selectSalade = createSelector(
  selectFeature,
  (salade) => {
    console.log(salade)
    return salade
  }
);
