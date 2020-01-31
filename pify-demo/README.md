
# pify

pify，通過它可以將很多采用callback方式進行調用的函數變成Promise調用，甚至採用async/await語法進行異步調用，從而可以在不修改調用函數的情況下避免回調地獄，也可以讓代碼具有更好的可讀性

以Node.js中異步讀取文件為例，常用的方法之一就是fs.readFile(path, encoding, callback)，這種通過回調函數進行異步操作的方式在以前的代碼中十分常見，也是迫不得已。但是當如今擁有了Promise之後，這樣寫就顯得十分麻煩，也不易於維護，所以可以通過pify這個模塊將他們Promise化（即Promisify）。

## References

[每天阅读一个 npm 模块（6）- pify](https://juejin.im/post/5b8e1813e51d45578b0ab947)