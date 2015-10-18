# worker-create
Create a worker without using a seperate worker.js file

###Preperation (just once):
 
    var worker_url = Worker.create(function(e){  //from function
      self.postMessage('Example post from Worker'); //your code here
    });

or

    var worker_url = Worker.create("self.postMessage('Example post from Worker');"); //from string

###Usage:

    var worker = new Worker(worker_url);




