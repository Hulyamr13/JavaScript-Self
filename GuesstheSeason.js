var month = gets();
var day = +gets();

if((month === 'March' && day >= 20) || month === 'April' || month === 'May' || (month === 'June' && day <= 20)){
  print('Spring');
}else if((month === 'June' && day >= 21) || month === 'July' || month === 'August' || (month === 'September' && day <= 21)){
  print('Summer');
}else if((month === 'September' && day >= 22) || month === 'October' || month === 'November' || (month === 'December' && day <= 20)){
  print('Autumn');
}else if((month === 'December' && day >= 21) || month === 'January' || month === 'February' || (month === 'March' && day <= 19)){
  print('Winter');
}