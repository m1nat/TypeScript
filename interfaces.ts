interface Rect {
  readonly id: string
  color?: string 
    size: {
      width: number
      height: number 
    }
}

const rect1: Rect = {
  id: '123',
  color: '#fff',
  size: {
    width: 20,
    height: 20
  }
}

const rect2: Rect = {
  id: '123',
  size: {
    width: 20,
    height: 20
  }
}

rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{}

console.log(rect3);

// Inheritance 

interface RectWithArea extends Rect {
  calcArea: () => number;
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  calcArea(): number {
    return this.size.width * this.size.height
  }
}


// ==========================

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}


// ================================

interface Style {
  [key: string]: string
}

const css: Style = {
  border: '1px solid black',
  marginTop: '20px',
  padding: '10px'
}