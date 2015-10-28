# worker-create
Create a worker without using a seperate worker.js file


 - Worker.create(funcOrString); //returns a worker
 - Worker.createURL(funcOrString); //returns an url


###Usage examples for Worker.create:

Use when you only need one worker!

    var worker = Worker.create(function(e){         //from function
      self.postMessage('Example post from Worker'); //your code here
    });
    //or
    var worker = Worker.create("self.postMessage('Example post from Worker');"); //from string

###Usage example for Worker.createURL:

Use when you need multiple workers!
 
    var worker_url = Worker.createURL(function(e){  //from function
      self.postMessage('Example post from Worker'); //your code here
    });
    //or
    var worker_url = Worker.createURL("self.postMessage('Example post from Worker');"); //from string

and than you can reuse worker_url as often as you want.

    var worker1 = new Worker(worker_url);
    var worker2 = new Worker(worker_url);
    ....




