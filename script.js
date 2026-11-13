function startExam(){
    let name=document.getElementById("name").value;
    if(name==""){
        alert("Please enter your name");
        return;
    }
    document.getElementById("login").style.display="none";
    document.getElementById("exam").style.display="block";
    document.getElementById("welcome").textContent="Welcome, " + name;
}

function calculateResult(){
    let score=0;
    for(let i=0;i<=1;i++){
        let ans=document.querySelector('input[name="q'+(i+1)+'"]:checked');
        if(ans){
            score+=Number(ans.value);
        }
    }
    document.getElementById("exam").style.display="none";
    document.getElementById("result").style.display="block";
    document.getElementById("score").textContent="score is: " + score+"/2";
}