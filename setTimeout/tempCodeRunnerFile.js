var btn = document.querySelector('button'), 
     little = document.querySelector('#little');

    function myAnimation(){
        let pos = 0;
        
        let timerid = setInterval(frame, 10);

        function frame(){
            if(pos == 300){
                clearInterval(timerid);
            } else {
                pos++; 
                little.style.top = pos + 'px'; 
                little.style.left = pos + 'px'; 
            }
        }
    }

btn.addEventListener('click', alert('test'));