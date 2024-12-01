import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const bowerman = new Bowerman('Bowerman');
const swordsman = new Swordsman('Swordsman');
const magician = new Magician('Magician');
const daemon = new Daemon('Daemon');
const udead = new Undead('Undead');
const zombie = new Zombie('Zombie');

console.log(bowerman, swordsman, magician, daemon, udead, zombie);
