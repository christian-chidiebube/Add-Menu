document.querySelector('#push').onclick = function
(){
    if(document.querySelector('#newtask input').
    value .length ==  0){
        alert("please Enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `
          <div class="task">
              <span id="taskname">
                ${document.querySelector
                    ('#newtask input').value}
                    </span>
                    <button class="delect">
                    <img src="delect-icon.png">

                    </button>
            
        
            </div>
                
        `;
                

       var current_tasks = document.
       querySelectorAll(".delect");
       for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
        }
       }


       var tasks = document.querySelectorAll(".task");
       for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
             this .classList.toggle('completed');
          }
       }

       document.querySelector("#newtask input").
       value = "";


             
}
}
