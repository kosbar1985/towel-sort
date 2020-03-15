
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr=[];
    if(matrix==undefined){
     return arr;   
    } else{
    
   

    for (let i=0; i<=matrix.length-1;i++){
        matrix[i].sort( (a, b) => a - b );
        if(i%2 == 0) {
            for (let j=0; j<=matrix[i].length-1;j++){
            
             arr.push(matrix[i][j]);
         } 
        }
        else {
            
             matrix[i].reverse();
             for (let j=0; j<=matrix[i].length-1;j++){
         
         arr.push(matrix[i][j]);
         }
        }
    }
       

  
    return arr;
}
}
