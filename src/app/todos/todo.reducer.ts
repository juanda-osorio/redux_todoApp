import { Action, createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './model/todo.model';

 
export const estadoInicial : Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Irme de ruta con mi Suzuki GSX 650F'),
    new Todo('Aprender Angular y Redux'),
    new Todo('Conseguir trabajo'),
];
 
const _todoReducer = createReducer(estadoInicial,
    //aqui no se usa push.
    //los corchetes es para devolver un array.
    //...state es la desestructuración extrae los todos de manera independiente
  on(crear, (state, { texto }) => [...state, new Todo( texto )] )
);
 
export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}