$(function() {

	//基本
  $('#modal').iziModal();
  $(document).on('click', '.trigger-default', function () {
	  $('#modal').iziModal('open', this);
  });

});