import { task1, task2, task3 } from "./etl/main/etl";


task1()
.then(data => task2())
.then(data => task3())