import Maze from './classes/maze';
import MazeSolver from './classes/maze_solver';
import Position from './classes/position';
import { resolve } from 'path';
import { fileToMatrix } from './utils';

const rand = Math.trunc(Math.random() * 9 + 1);

// if the argv was not passed,
// the maze path will be one of the .txt path
// of mazes_data folder
const path = process.argv[2]
  ? resolve(process.argv[2])
  : resolve('mazes_data', `maze_${rand}.txt`);

const mazeMatrix = fileToMatrix(path);

const maze = new Maze(mazeMatrix);
const mazeSolver = new MazeSolver(maze);

mazeSolver.execute(new Position(1, 1));

const result = mazeSolver.getResult();

console.clear();
console.log('*** Saída Encontrada ***\n');
console.log(maze.toString(result));
console.log('*** Percurso ***\n');
result.forEach(position => console.log(position.toString()));