/*global Worker, Blob*/

/* https://github.com/zevero/worker-create 
 * Create a worker without using a seperate worker.js file either from function or from string
 */

'use strict';
Worker.createURL = function(func_or_string){
    var str = (typeof func_or_string === 'function')?func_or_string.toString():func_or_string;
    var blob = new Blob(['\'use strict\';\nself.onmessage ='+str], { type: 'text/javascript' });
    return window.URL.createObjectURL(blob);
};

Worker.create = function(func_or_string){
  return new Worker(Worker.createURL(func_or_string));
};