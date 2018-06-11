
$('.cantidad').on(`keyup`,function(){
    var el = $(this);
    var parent = el.parents("tr");
    var cantidad = el.val();
    var precio = parent.find('.precio').val();
    parent.find('.total').html(cantidad*precio);
   }),
   
$('.precio').on('keyup',function(){
    var el =$(this);
    var parent = el.parents("tr");
    var cantidad = parent.find('.cantidad').val();
    var precio = el.val();
    parent.find('.total').html(cantidad*precio);
})