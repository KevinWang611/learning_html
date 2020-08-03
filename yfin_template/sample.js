// Declare variables or insert code here
var counter = 0;

/**
 * Called when the canvas and all its child elements are rendered and attached into the page.
 */
this.onRender = function () {
    // Insert your code here. This is an ideal place for setting up event listeners
    document.getElementById('id1').innerHTML = "Changed contents";
    
    document
        .getElementById("button1")
        .addEventListener(
            "click",
             function(){
                counter += 1;
                document.getElementById("id1").innerHTML = "Count:" + counter.toString();
            });
};

/**
 * Called when the canvas and all its child elements are removed from the page.
 */
this.onRemove = function () {
    // Insert your code here. This is an ideal place for removing event listeners
};
