/*global Worker, Blob*/

/* https://github.com/zevero/worker-create 
 *
 * Create a worker without using a seperate worker.js file either from function or from string
 * 
 * Preparation:
 * var worker_url = Worker.create(function(e){ //from function
 *   self.postMessage('Example post from Worker'); //your code here
 * });
 * or
 * var worker_url = Worker.create("self.postMessage('Example post from Worker');"); //from string
 *
 * Usage:
 * var worker = new Worker(worker_url); //as often as you like
 * 
 */
'use strict';
Worker.create = function(func_or_string){
    var str = (typeof func_or_string === 'function')?func_or_string.toString():func_or_string;
    var blob = new Blob(['\'use strict\';\nself.onmessage ='+str], { type: 'text/javascript' });
    var workerUrl = window.URL.createObjectURL(blob);
    return Worker(workerUrl);
};
