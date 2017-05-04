import ActionCreator from './interfaces/ActionCreator';
import Mutator from './interfaces/Mutator';
import { subscribe } from './dispatcher';

export default function mutator(actionDispatcher: ActionCreator) {
    return function subscribeMutator(mutator: Mutator) {
        subscribe(actionDispatcher, mutator);
    }
}