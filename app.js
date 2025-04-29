let textarea = document.getElementById("textarea")

const btn = document.getElementById("btn")
const box2 = document.getElementById("box2")

function Quiz(question, option1, option2, option3, ans){
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.ans = ans;
}

const questionarr = [];

btn.addEventListener('click', ()=>{
    let ivv=0;
    let ival;
    let count=0;
    let option1;
    let option2;
    let option3;
    let text = textarea.value
    console.log(text)
    console.log(text.length)
    for(let i=0; i<text.length; i++){
        if(text[i]=="?"){
            console.log("Question found")
            console.log("i itni bar chla hai", i)
            var question = text.slice(ivv, i);
            console.log("Ye question copy hoa hai", question)
             ival = i;
             iv=i
        }if(text[i]=="."){
            console.log("option found")
            var option = text.slice(ival+2, i)
            if(count==0){
                option1 = option;
                count++;
            }else if(count==1){
                option2 = option;
                count++;
            }else if(count==2){
                option3=option;
                count=0;
            }
           
           // console.log("ye option found hoa hai", option)
            console.log("ye i ki value hai", i)
            ival=i;
            var iv = i;
            ivv=i;
           // ivv+=2;
        }if(text[i]=="*"){
            console.log("ans found")
            var ans = text.slice(iv+2, i)
            console.log("ye answer hai", ans)
            ivv = i
           // ivv+=2;
            ival=i
            iv=i;
            console.log("ivv ki vlaue", ivv)
        }
        if(question && option1 && option2 && option3 && ans){
            questionarr.push(new Quiz(question, option1, option2, option3, ans))
            option1="";
            option2="";
            option3="";
            question="";
            ans="";
        }
    }

 

        questionarr.map(item=>{
            box2.innerHTML+=`
            <div>
           <p> Question: ${item.question}</p>
            <p>Option1: ${item.option1}</p>
            <p>Option2: ${item.option2}</p>
            <p>Option3: ${item.option3}</p>
            <p>answer: ${item.ans}</p>
            </div>
            ----------------
                `
    
        })
    
    
    console.log(questionarr)
    
})

