var acc = document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for (i=0;i<len;i++) {
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var content = this.nextElementSibbling;
        if(content.style.maxHeight) {
            content.style.maxheight = null;
        }else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
}