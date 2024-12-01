export default class Character {
    constructor (name) {
        if (name.length < 2 || name.length > 10 || name === undefined) {
            throw new Error('Неправильный ввод. Введите имя строкой от 2 до 10 символов включительно.');
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
        this.attack = this.attack;
        this.defence = this.defence;
    }
    levelUp() {
        if (this.health === 0) {
            throw new Error('нельзя повысить левел умершего');
        }
        this.health = 100;
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
    }
    damage(points){
        if(this.health > 0) {
            this.health -= points * (1 - (this.defence ?? 0) / 100);
        } else {
            this.health = 0;
            throw new Error('Вы мертвы!');
            
        }
    }
}