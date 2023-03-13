let first = Number(gets());
let second = Number(gets());
let third = Number(gets());

if (first>=second&&first>=third){
  if (second>third){
   print(first+" "+second+" "+third);
   }
  else{
   print(first+" "+third+" "+second);
   }
}
else if(second>=first&&second>=third){
   if(first>third){
  print(second+" "+first+" "+third);
    }
    else{
   print(second+" "+third+" "+first);
   }
}
else if(third>=first&&third>=second){
   if(first>second){
   print(third+" "+first+" "+second);
   }
   else{
   print(third+" "+second+" "+first)
   }
}