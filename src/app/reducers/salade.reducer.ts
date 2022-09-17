import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MyAction, MyActionType} from '../actions/salade.actions';

export class SaladeState {
  id: number;
  nom: string;
  prix: number;
  ingredients: Array<{nom: string;prix: number}>;
  sauce: string;
  reduction: number;
}

const initialState: SaladeState = {
  id: 1,
  nom: 'Printanière',
  prix: 11.99,
  ingredients: [],
  sauce: 'vinaigrette',
  reduction: 0
};

export function saladeReducer(state: SaladeState = initialState, action: MyAction): SaladeState {
  switch (action.type){
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

export const selectFeature = createFeatureSelector<any>('salade');
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: SaladeState) => state.id
);
