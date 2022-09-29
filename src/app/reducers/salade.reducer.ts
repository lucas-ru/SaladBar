import { ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { MyAction, MyActionType } from '../actions/salade.actions';

export interface Salade {
  id: number;
  nom: string;
  prix: string;
  ingredients: Array<{ nom: string; prix: string }>;
  sauce: string;
  reduction: string;
}

const initialState: Salade = {
  id: 1,
  nom: 'Printanière',
  prix: '11.99',
  ingredients: [],
  sauce: 'vinaigrette',
  reduction: '0'
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
  switch (action.type) {
    case MyActionType.StartApp:
      return { ...state };
    case MyActionType.AddIng:
      const ingredients = [...state.ingredients, action.ing];
      const prixTot = parseFloat(state.prix) + parseFloat(action.ing.prix)
      return {
        ...state,
        ingredients,
        prix: prixTot.toString()
      };
    case MyActionType.ModifyName:
      return {
        ...state,
        nom: action.nom
      };
    case MyActionType.ModifyPrice:
      return {
        ...state,
        prix: action.prix
      };
    case MyActionType.ModifyReduc:
      const prixAvecReduc = parseFloat(state.prix) * ((parseFloat(action.reduction) / 100) + 1)
      return {
        ...state,
        reduction: action.reduction + "%",
        prix: prixAvecReduc.toString()
      };
    case MyActionType.ModifySauce:
      return {
        ...state,
        sauce: action.sauce
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
  (state: Salade) => {
    return state
  }
);

export const selectNom = createSelector(
  selectFeature,
  (state: Salade) => state.nom
)


export const selectPrix = createSelector(
  selectFeature,
  (state: Salade) => state.prix
)

export const selectIng = createSelector(
  selectFeature,
  (state: Salade) => state.ingredients

)

export const selectSauce = createSelector(
  selectFeature,
  (state: Salade) => state.sauce
)

export const selectReduc = createSelector(
  selectFeature,
  (state: Salade) => state.reduction
)