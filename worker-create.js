/*global Worker, Blob*/

/* https://github.com/zevero/worker-create 
 *
 * Create a worker without using a seperate worker.js file
 * 
 * Preparation:
 * var worker_url = Worker.create(function(e){ //only once
 *   self.postMessage('Example post from Worker'); //your code here
 * });
 *
 * Usage:
 * var worker = new Worker(worker_url); //as often as you like
 * 
 */
'use strict';
Worker.create = function(worker_fn){
    var blob = new Blob(['\'use strict\';\nself.onmessage ='+worker_fn.toString()], { type: 'text/javascript' });
    return window.URL.createObjectURL(blob);
};