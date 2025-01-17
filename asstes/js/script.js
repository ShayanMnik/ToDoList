const inp = document.querySelector('#tdl');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('.todos');
const done = document.querySelector('.CompletedTodos')
const dlt = document.querySelector('.DeletedTodos')



btn.addEventListener('click', ()=>{
    if(inp.value == ''){
        alert('Please fill the input ⚠️');
    }
    else if(inp.value.length <= 23){
        let li = document.createElement('li');
        li.innerHTML= `
            <input class='inpAdd' type=text value='${inp.value}' readonly style="white-space: pre-wrap;"/>            
            <span class='checkbox' onclick='Tic(this)'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
            </span>
            <span class='edit' onclick='myEdit(this)' data-status='off'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20" height="20" fill="white" ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </span>
            <span class='del' onclick=myDelete(this)> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"  class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </span>
        `
        list.appendChild(li);
        inp.value = '';
        inp.focus();
    }else{
        let li = document.createElement('li');
        li.innerHTML= `
            <input class='inpAdd' type=text value='${inp.value.slice(0,23)}' readonly style="white-space: pre-wrap;"/>            
            <span class='checkbox' onclick='Tic(this)'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
            </span>
            <span class='edit' onclick='myEdit(this)' data-status='off'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20" height="20" fill="white" ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </span>
            <span class='del' onclick=myDelete(this)> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"  class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </span>
        `
        list.appendChild(li);
        inp.value = '';
        inp.focus();        
    }
});



const Tic = (s) => {
    const cloneLi = s.parentElement.innerHTML

    let j = s.previousElementSibling.value
    let li = document.createElement('li')
    li.innerHTML= `
            <span class='checkbox'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="Green" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>                
            </span>
            <input style='padding-left: 15px' class='inpAdd' type=text value='${j.slice(0,23)}' readonly style="white-space: pre-wrap;"/>            
            <span class='del' onclick=myDelete(this)> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"  class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </span>
        `
    li.dataset.clone=cloneLi
    done.appendChild(li)
    s.parentNode.remove()
}

const myDelete = (s) => {
    s.parentNode.classList.add('dele')
    setTimeout(() => {
        s.parentNode.remove()
    }, 400);
}

const myEdit = (s) =>{
    if(
        s.getAttribute('data-status') == 'off'
    ){
        s.innerHTML='☑️'
        s.setAttribute('data-status', 'on')
        s.previousElementSibling.previousElementSibling.removeAttribute('readonly')
        s.previousElementSibling.previousElementSibling.focus()
    }else{
        s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20" height="20" fill="white" ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>'
        s.setAttribute('data-status', 'off')
        s.previousElementSibling.previousElementSibling.setAttribute('readonly','readonly')

    }
}

function time(){
        const demo = document.querySelector('#demo1')
        const now = new Date()
        const day = (now.getDay())+1
        const month = (now.getMonth())+1
        const dayIM = now.getDate()
        function Day(){
            let temp = ""
            switch(day){
                case 1 : temp = "Sunday";break; 
                case 2 : temp = "Monday";break; 
                case 3 : temp = "Tuesday";break; 
                case 4 : temp = "Wednesday";break; 
                case 5 : temp = "Thursday";break; 
                case 6 : temp = "Friday";break; 
                case 7 : temp = "Saturday";break; 
            }
            return temp
        }
        Day()
        function Month(){
            let kemp = ""
            switch(month){
                case 1 : kemp = "January"
                case 1 : kemp = "February"
                case 1 : kemp = "March"
                case 1 : kemp = "April"
                case 1 : kemp = "May"
                case 1 : kemp = "June"
                case 1 : kemp = "July"
                case 1 : kemp = "August"
                case 1 : kemp = "September"
                case 1 : kemp = "October"
                case 1 : kemp = "November"
                case 1 : kemp = "November"
            }
            return kemp
        }
        Month()
        function DayInMonth(){
            const date = document.querySelector('#demo1')
            const now = new Date()
            const dayInMonth = now.getDate()
            return dayInMonth
        }
        DayInMonth()        
        demo.innerHTML= Day() + " , " + Month() + " , " + DayInMonth()
        console.log(demo.innerHTML);
        
    }
    time()

