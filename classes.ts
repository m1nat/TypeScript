class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}

const car2 = new Car('Audi');

class Animal {
  protected voice: string = ''
  public color: string = 'black'
  private go() {
    console.log('Go');
    
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat();
console.log(cat.setVoice('miau'));
console.log(cat.color);

// Abstract

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render'); 
  }
  info(): string {
    return 'This is info';
  }
}


