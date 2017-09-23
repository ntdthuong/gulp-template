var tabs = $('#tabs'),
  len = tabs.children().length,
  link = tabs.find('li.active').children().attr('href'),
  name = link.slice(0, (link.length - 1)),
  order = parseInt(link.slice((link.length - 1))),
  next = (order + 1),
  prev = (order - 1);
// console.log('link' + link);
  target = tabs.siblings().first().find(name + order);
$('[data-prev]').on('click' , function() {
  link = tabs.find('li.active').children().attr('href');
  name = link.slice(0, (link.length - 1));
  order = parseInt(link.slice((link.length - 1)));
  prev = (order - 1);
  if (prev !== 0) {
    $('[href=' +'"' + name + prev + '"').trigger('click');
  } else {
    console.log(len);
    $('[href=' +'"' + name + len + '"').trigger('click');
  }
});
link = tabs.find('li.active').children().attr('href');
$('[data-next]').on('click' , function() {
  link = tabs.find('li.active').children().attr('href');
  name = link.slice(0, (link.length - 1));
  order = parseInt(link.slice((link.length - 1)));
  next = (order + 1);
  if (next <= len) {
    console.log(3);
    $('[href=' +'"' + name + next + '"').trigger('click');
  } else {
    $('[href=' +'"' + name + 1 + '"').trigger('click');
  }
});
link = tabs.find('li.active').children().attr('href');
