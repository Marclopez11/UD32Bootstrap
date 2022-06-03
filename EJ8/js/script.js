function insrt(num){
    $('.calc-display').val($('.calc-display').val()+num);
}

function eql(){
    $('.calc-display-result').val(eval($('.calc-display').val()));

}

function c(){
    $('.calc-display').val('');
}