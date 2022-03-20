let maquinas = obsMaquina;
const tbody = document.querySelector('.tbody');
const tbody1 = document.querySelector('.tbody-1');
const tbody2 = document.querySelector('.tbody-2');
const tbody3 = document.querySelector('.tbody-3');
const modalClose = document.querySelector('.modal_close');
const modalContainer = document.querySelector('.container_modal');
const modal = document.querySelector('.modal');
const selectedInput = document.querySelector('.seleled_input');
const actionInput = document.querySelector('.search');
const inputSearch = document.querySelector('.input_search');
const formClose = document.querySelector('.form_close');
const formContainer = document.querySelector('.container_form');
const btnAdd = document.querySelector('.btn_add');




// form
const formName = document.querySelector('.input_name');
const formDate = document.querySelector('.input_date');
const typeInput = document.querySelector('.type_input');
const modelInput = document.querySelector('.model_input');
const selectedDays = document.querySelector('.selected_days');
const containerFile = document.querySelector('.container_file');
const textarea = document.querySelector('.textarea');
const file = document.querySelector('.file');
const buttonForm = document.querySelector('.button_form');

let arrIndex = 0;
let = clicado = 0;


/*
const handleSearchInput = () =>{
        if (inputSearch.value == '') {
            return maquinas
        }else{
     
    
           maquinas=  maquinas[0].filter((item) => item.name == inputSearch.value);
    
            console.log(maquinas)
            functionsTab.days(maquinas)
            return maquinas;
        }
    
}

actionInput.addEventListener('click', handleSearchInput)
*/


containerFile.addEventListener('click', function () {
    file.click();
})



buttonForm. addEventListener('click', function () {
    if (formName.value == '' || formDate.value == '' || typeInput.value == '' ||
    modelInput.value == '' || textarea.value == ''   
    ) {

        alert('Preencha os todos os campos ');
        return;
        
    }

 
    let optionsValue = +selectedDays[selectedDays.selectedIndex].value;

    switch (optionsValue) {
        case 0:
            functionsTab.days(maquinas, 0);
            break;
        
        case 1:
            functionsTab.week(maquinas, 1);
            break;
        case 2:
        functionsTab.month(maquinas, 2);
        break;
        case 3:
            functionsTab.year(maquinas, 3);
            break;
        
        default:
            break;
    }

    let Id = maquinas[optionsValue].length
    let date = new Date(formDate.value);
    Id++;

    //clicado++
    let img = null;
     if (file.files) {
        img = file.files[clicado];
     }

    maquinas[optionsValue].push(
        {id:Id , name: formName.value, age:date.getFullYear(), type:typeInput.value, model:modelInput.value, img, descriptions: textarea.value},

    )
    console.log(maquinas[optionsValue]);
    formName.value = ''  
    formDate.value = '' 
    typeInput.value = '' 
    modelInput.value = ''
    textarea.value = ''   

    formContainer.style.display = 'none'

    
})


const trs = document.querySelectorAll('.line-table');
trs.forEach((item)=>{
    item.addEventListener('click', handleGetItem)
})






btnAdd.addEventListener('click', function () {
    formName.focus();
    formContainer.style.display = 'flex'
})




modalClose.addEventListener('click', function () {
    modalContainer.style.display = 'none'
})

formClose.addEventListener('click', function () {
    formContainer.style.display = 'none';
})



const statusInfor = document.querySelectorAll('.status_infor');
const animadoTable = document.querySelectorAll('tbody', '.tbody-1','.tbody-2', '.tbody-3');


const btnsDays = document.querySelectorAll('.status_container');



const duplicateCreateElements = (...el)=>{
    let arrEle = [];
    
    for (let i in el ) arrEle[i] = document.createElement(el[i]); 
    return arrEle
}





function handleGetItem(e, index) {
    let key = +e.currentTarget.getAttribute('data-key');
    moadalFuncton(maquinas[index][key]); 
}

function moadalFuncton(infos) {


    modal.querySelector('.id').innerHTML = infos.id;
    modal.querySelector('.name').innerHTML = infos.name;
    modal.querySelector('.age').innerHTML = infos.age;
    modal.querySelector('.type').innerHTML = infos.type;
    modal.querySelector('.model').innerHTML = infos.model;
    modal.querySelector('.container_img_manu img').src = typeof  infos.img  === 'object'? URL.createObjectURL(infos.img):
    infos.img;
    modal.querySelector('.description').innerHTML = infos.descriptions;
    modalContainer.style.display = 'flex';
    
}

let functionsTab = {

    
    days(maquinas, number){

        statusInfor.forEach((item)=> item.classList.remove('active'));
        statusInfor[0].classList.add('active');
        animadoTable.forEach((item)=> item.classList.remove('animado-table'));
        tbody.classList.add('animado-table');

        let arrIndex = 0

        maquinas[number].map((item, index)=>{
            tbody1.innerHTML = '';
            tbody2.innerHTML= '';
            tbody3.innerHTML = '';

            tbody.innerHTML +=`
                <tr  class="line-table" data-key="${index}">
                     <td>${item.id}</td>
                     <td>${item.name}</td>                
                     <td>${item.age}</td>                
                     <td>${item.type}</td>  
                     <td>${item.model}</td>                
                </tr>  
            `;
        });
        const trs = document.querySelectorAll('.line-table');
        trs.forEach((item)=>{
            item.addEventListener('click', (e)=>handleGetItem(e, arrIndex))
          
        })
    },
    week(maquinas, number){
        statusInfor.forEach((item)=> item.classList.remove('active'));
        statusInfor[1].classList.add('active');
        animadoTable.forEach((item)=> item.classList.remove('animado-table'));

        arrIndex = 1

        tbody1.classList.add('animado-table')
        tbody.innerHTML = '';
        tbody2.innerHTML= '';
        tbody3.innerHTML = '';
        maquinas[number]?.map((item, index)=>{
            tbody1.innerHTML +=`
                <tr  class="line-table" data-key="${index}">
                     <td>${item.id}</td>
                     <td>${item.name}</td>                
                     <td>${item.age}</td>                
                     <td>${item.type}</td>  
                     <td>${item.model}</td>                
                </tr>  
            `;
        });
        const trs = document.querySelectorAll('.line-table');
        trs.forEach((item)=>{
            item.addEventListener('click', (e)=>handleGetItem(e, arrIndex))
          
        })


    },
    month(maquinas, number){

        statusInfor.forEach((item)=> item.classList.remove('active'));
        statusInfor[2].classList.add('active');
        animadoTable.forEach((item)=> item.classList.remove('animado-table'));
        tbody2.classList.add('animado-table');

        console.log(maquinas[number]);
        maquinas[number]?.map((item, index)=>{
            tbody.innerHTML = '';
            tbody1.innerHTML = '';
            tbody.innerHTML = '';
            tbody3.innerHTML = '';

            arrIndex = 2
            
            tbody2.innerHTML +=`
                <tr  class="line-table" data-key="${index}">
                     <td>${item.id}</td>
                     <td>${item.name}</td>                
                     <td>${item.age}</td>                
                     <td>${item.type}</td>  
                     <td>${item.model}</td>                
                </tr>  
            `;
        })
        
        const trs = document.querySelectorAll('.line-table');
        trs.forEach((item)=>{
            item.addEventListener('click', (e)=>handleGetItem(e, arrIndex))
          
        })

    },
    year(maquinas, number){
        statusInfor.forEach((item)=> item.classList.remove('active'));
        statusInfor[number].classList.add('active');
        animadoTable.forEach((item)=> item.classList.remove('animado-table'));

        tbody3.classList.add('animado-table')

            arrIndex = 3

        maquinas[number]?.map((item, index, arr)=>{
            tbody.innerHTML = '';
            tbody.innerHTML = '';
            tbody2.innerHTML= '';
            tbody3.innerHTML +=`
                <tr class="line-table" data-key="${index}">
                     <td>${item.id}</td>
                     <td>${item.name}</td>                
                     <td>${item.age}</td>                
                     <td>${item.type}</td>  
                     <td>${item.model}</td>                
                </tr>  
            `;
        });

        const trs = document.querySelectorAll('.line-table');
        trs.forEach((item)=>{
            item.addEventListener('click', (e)=>handleGetItem(e, arrIndex))
          
        })
    }
} 



const   handleNavigatioCategory = ({currentTarget}) => {
    
   let x = currentTarget.getAttribute('data-name')
   
    if(functionsTab[x]) {
        switch (x) {
            case 'days':
                functionsTab[x](maquinas,0 ); 
                break;
            
            case 'week':
                functionsTab[x](maquinas,1); 
                break;
            case 'month':
                functionsTab[x](maquinas,2 ); 
                break;
                case 'year':
                    functionsTab[x](maquinas,3 ); 
                    break;
                
            default:
                break;
        }


        //functionsTab[x](maquinas);   

    }
}



btnsDays.forEach((item)=>{
    item.addEventListener('click', handleNavigatioCategory)
})

functionsTab.days(maquinas, 0);





