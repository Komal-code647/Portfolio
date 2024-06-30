    var titles=document.getElementsByClassName("titles");
    var titlecontents=document.getElementsByClassName("title-contents");

        function opentab(titlename){
            for(title of titles){
                title.classList.remove("active");
            }
            for(titlecontent of titlecontents){
                titlecontent.classList.remove("active-contents");
            }
            event.currentTarget.classList.add("active");
            document.getElementById(titlename).classList.add("active-contents");
        }
    