let menu = document.querySelector('.menu')

menu.addEventListener('click', ()=>{
    let nav = document.querySelector('nav')
    nav.classList.toggle('slide')
})

document.querySelector('.generate').addEventListener('click', (event)=>{
    event.preventDefault();

    let qr_text = document.querySelector('.qr-text').value

    let imgBox = document.querySelector('.imgBox');
    let qrImage = document.querySelector('.qrImage')

    if(qr_text.length > 0){
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qr_text

        imgBox.classList.add('show')
    }else{
        document.querySelector('.qr-text').classList.add('error')
        setTimeout(()=>{
           document.querySelector('.qr-text').classList.remove('error')
        }, 1000)
    }
})