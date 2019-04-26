$('#btn-skoro').on('click',function() {
    $('#skoro').css('display','block');
    $('#uje').css('display','none');
    $('#btn-skoro').css('border-color', '#c5c204');
    $('#btn-skoro').css('color', '#c5c204');

    $('#btn-uje').css('border-color', '#333333');
    $('#btn-uje').css('color', '#333333');
})

$('#btn-uje').on('click',function() {
    $('#skoro').css('display','none');
    $('#uje').css('display','block');
    $('#btn-uje').css('border-color', '#c5c204');
    $('#btn-uje').css('color', '#c5c204');

    $('#btn-skoro').css('border-color', '#333333');
    $('#btn-skoro').css('color', '#333333');
})




