const btns = $('.tab-button');
const contents = $('.tab-content')


btns.on('click', (e) => {
  btns.removeClass('selected');
  contents.removeClass('show');


  let no = e.target.dataset.no;

  btns.eq(no).addClass('selected');
  contents.eq(no).addClass('show');
  
})