const strip = (x:string | number) => {
  if(typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim()
}


class myHeader {
  header = 'response header'
  result = 'response message'
}


class MyError {
  header = 'Error header'
  messege = 'error messege'
}

const res = new myHeader();

const result = (res: myHeader | MyError) => {
  if (res instanceof myHeader) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.messege
    }
  }
} 

console.log(result(res));

