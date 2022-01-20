const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';
const showBtn = document.querySelector('#showGallery');
showBtn.addEventListener('click', showGallery);


function showGallery(){
    axios
    .get(endpoint)
    .then((response) => {
        addObjFromResponse(response);
    })
    .catch((error) => {
        console.log(error);
    });
}


function addObjFromResponse(response){
    console.log(response);
    const diskObjList = response.data.response;
    console.log(diskObjList);
    console.log(diskObjList[0].poster);
    console.log(diskObjList[0].title);
    console.log(diskObjList[0].author);
    console.log(diskObjList[0].genre);
    console.log(diskObjList[0].year);
    console.log(diskObjList.length);

    for(let i = 0; i < diskObjList.length; i++){
        let newObj = diskObjList[i];
        
        //immagine e classi appendi a div card
        let img = document.createElement('img');
        img.src = diskObjList[i].poster;
        img.classList.add('card-img-top', 'img-fluid');

        
        //title della card apendi a div card body
        let title = document.createElement('h5');
        title.innerText = diskObjList[i].title + ' ' + diskObjList[i].author;
        title.className = 'card-title';

        //card text 
        let text = document.createElement('p');
        text.innerHTML = diskObjList[i].author + ' ' + diskObjList[i].genre + ' ' + diskObjList[i].year;
        text.className = 'card-text';

        //div Card body appendi a div card
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        
        //Card div  appendi al div colonna
        let divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.appendChild(img);
        divCard.appendChild(cardBody);
        
        //Gallery div crolonna
        let gallery = document.getElementById('gallery');
        gallery.appendChild(divCard);

    }

    
    
    
}