function adddiv(){
    const div=document.createElement('div');
    div.className='same-type';
    const menu=document.querySelector('#items');
   // document.getElementById('items').appendChild(div);
   menu.appendChild(div);
    //this.appendChild(div);
    return;
}