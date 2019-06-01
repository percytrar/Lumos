$('form').submit((e)=>{
    console.log($('.invisible').length,$('.incorrectAlert').length)
    if($('.invisible').length !== $('.incorrectAlert').length){
        e.preventDefault();
    }
});