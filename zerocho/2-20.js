//별찍기 숙제

/*
*****
****
***
**
*
*/

for(let i=0; i<5; i++){
    console.log('*'.repeat(5-i));
}



/*

*
***
*****
*******
*********
1 3 5 7 9

0 1
2 3
4 5
6 7
8 9

*/

for(let i=0; i<9; i+=2){
    console.log('*'.repeat(i+1));
}



/*

*********
*******
*****
***
*
9 7 5 3 1

0 9
2 7
4 5
6 3
8 1

*/

for(let i=0; i<9; i+=2){
    console.log('*'.repeat(9-i));
}



/*

*****
B****
BB***
BBB**
BBBB*

*의 경우
0 5
1 4
2 3
3 2
4 1

공백의 경우
0 0
1 1
2 2
3 3
4 4

*/

for(let i=0; i<5; i++){
    console.log(' '.repeat(i)+'*'.repeat(5-i));
}





/*

BBBB*
BBB**
BB***
B****
*****

*의 경우
0 1
1 2
2 3
3 4
4 5

공백의 경우
0 4
1 3
2 2
3 1
4 0

*/

for(let i=0; i<5; i++){
    console.log(' '.repeat(4-i)+'*'.repeat(i+1));
}






/*

BB*
B***
*****  
B***
BB*
  
i B *
0 2 1
1 1 3
2 0 5

3 1 3   -2 
4 2 1

0 1 3   +1 
1 2 1

*/

for(let i=0; i<3; i++){
    console.log(' '.repeat(2-i)+'*'.repeat(i*2+1));
}
for(let i=0; i<2; i++){
    console.log(' '.repeat(i+1)+'*'.repeat(i*2+3));
}



/*

BBBB*
BBB***
BB*****
B*******
*********

i B *
0 4 1    
1 3 3
2 2 5
3 1 7
4 0 9

*/


for(let i=0; i<5; i++){
    console.log(' '.repeat(4-i)+'*'.repeat(i*2+1));
}