class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbis says ${line}`)
  }
}

const killerRabbit = new Rabbit('killer');

killerRabbit.speak('abc');