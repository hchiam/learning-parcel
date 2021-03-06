// import another component
import main from './main';
import { isEmpty } from 'lodash'; // this library will be automatically added to node_modules, package.json, and package-lock.json

main();

let animals = ['apple', 'banana', 'coconut', 'durian'];

if (!isEmpty(animals)) {
  animals = animals.map((animal) => animal.toUpperCase());
}

alert('All uppercase: ' + animals.join(', '));
