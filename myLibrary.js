/**
 * Created by mohammedabdelkarym on 5/13/15.
 */

//Wrapper for the library.
(function(){
    //Main constructor like $ or jquery
    //The myLibrary object is actually just the init constructor
    var
        version = "1.0",
        myLibrary = function(arguments){
        if(!(this instanceof myLibrary)){
            // To force new
            var object = new myLibrary()
            object.arg = arguments;
            return object;
        }
    };


    //create fn alias for prototype
    myLibrary.fn=myLibrary.prototype={
        myLibrary : version,
        constructor:myLibrary,
        log:function(){
           console.log(this.arg);
        }
    };

    //To expose the library
    window.myLibrary=myLibrary;
}());//to call the wrapper once the file loaded
