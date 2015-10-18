# worker-create
Create a worker without using a seperate worker.js file

###Preperation (just once):
 
    var worker_url = Worker.create(function(e){
      self.postMessage('Example post from Worker'); //your code here
    });


###Usage:

    var worker = new Worker(worker_url);




