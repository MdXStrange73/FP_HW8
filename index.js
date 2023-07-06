function createCalculator(base) {
    let value = base;
  
    function add(num) {
      if (typeof num === 'number') {
        value += num;
      }
    }
  
    function sub(num) {
      if (typeof num === 'number') {
        value -= num;
      }
    }
  
    function set(num) {
      if (typeof num === 'number') {
        value = num;
      }
    }
  
    function get() {
      return value;
    }
  
    function reset() {
      value = base;
    }
  
    return {
      add: add,
      sub: sub,
      set: set,
      get: get,
      reset: reset
    };
  }
  
  const calculator = createCalculator(100);
  
  calculator.add(10);
  calculator.add(10);
  calculator.sub(20);
  calculator.set(20);
  calculator.add(10);
  calculator.add(10);
  calculator.add('qwe');
  console.log(calculator.get()); // 40
  
  calculator.reset();
  console.log(calculator.get()); // 100