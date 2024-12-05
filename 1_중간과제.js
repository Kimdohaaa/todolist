let 할일목록 =[
    {할일코드 : 1, 할일내용 : '밥먹기', 할일상태 : false},
    {할일코드 : 2, 할일내용 : '밥먹기', 할일상태 : true}
];
let 식별번호 = 3;

function inFunc(){
    let contentInput = document.querySelector('.contentInput').value;

    let 할일 ={
        할일코드 : 식별번호,
        할일내용 : contentInput,
        할일상태 : false
    };

    할일목록.push(할일);
    식별번호++;

    alert('할일이 등록되었습니다.');
    
    document.querySelector('.contentInput').value = ``;

    outFunc();
    return;
};

outFunc();

function outFunc(){
    let todoBottom = document.querySelector('#todoBottom');

    let html =``;

    for(let index = 0; index <= 할일목록.length -1; index++){
        let info = 할일목록[index];
        html += `<div class="contentBox ${info.할일상태 ? 'success' :''}">
                    <div class="content">${info.할일내용}</div>
                    <div class="contentBtns">
                        <button onclick="changeFunc(${info.할일코드})" class="updateBtn">수정</button>
                        <button onclick="deleteFunc(${info.할일코드})" class="deleteBtn">삭제</button>
                    </div>
                </div>`;
    };

    todoBottom.innerHTML = html;

    return;
};


function changeFunc(수정코드){
    for(let index = 0; index <= 할일목록.length -1; index++){
        if(할일목록[index].할일코드 == 수정코드){
            할일목록[index].할일상태 = !할일목록[index].할일상태;

            break;
        };
    };

    outFunc();

    return;
};


function deleteFunc(삭제코드){
    for(let index = 0; index <= 할일목록.length -1; index++){
        if(할일목록[index].할일코드 == 삭제코드){
            할일목록.splice(index, 1);

            break;
        };
    };

    outFunc();

    return;
};