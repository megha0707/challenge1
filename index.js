function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var Jlist=response.list;
            var output="";
            for( var i=0;i<Jlist.length;i++){
                output +="<tr>";
                output +="<th>" +Jlist[i].no+"</th>";
                output +="<th>" +Jlist[i].item+"</th>";
                output +="<th>" +Jlist[i].quantity+"</th>";
                output +="<th>" +Jlist[i].unit+"</th>";
                output +="<th>" +Jlist[i].department+"</th>";
                output +="<th>" +Jlist[i].notes+"</th>";
                output +="</tr>";

            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
}