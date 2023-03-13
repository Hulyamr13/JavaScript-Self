let price = + gets();
let cash = +gets();
let change = (cash - price)*100;

 if (change >= 100) {
    lev = Math.floor(change) /100;
    change -= Math.floor(lev)  *100;
    print (Math.floor(lev) + ' x 1 lev');
  } if (change >= 50) {
    stotinki50 = change/50;
    change -= Math.floor(stotinki50)*50;
    print (' 1 x 50 stotinki' );
  }  if ( change >= 20){
    stotinki20 = change / 20;
    change -= Math.floor(stotinki20)*20;
    print(Math.floor(stotinki20) + ' x 20 stotinki');
  } if (change >= 10) {
    stotinki10 = change / 10;
    change -= Math.floor(stotinki10) * 10;
    print (Math.floor(stotinki10) + ' x 10 stotinki');
  }  if (change >= 5) {
    stotinki5 = change /5;
    change -= Math.floor(stotinki5) * 5;
    print(Math.floor(stotinki5) + ' x 5 stotinki');
  } if (change >= 2) {
    stotinki2 = change / 2;
    change -= Math.floor(stotinki2)*2;
    print(Math.floor(stotinki2) + ' x 2 stotinki');
  } if (change >= 1) {
    stotinki1 = change / 1;
    print(Math.floor(stotinki1) + ' x 1 stotinka');
  }