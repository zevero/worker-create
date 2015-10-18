# jquery-checkbox-table
A table (matrix) of checkboxes with tristate support jquery plugin

### Why another one?

It supports
 - tristate checkboxes
 - set with data
 - set with function
 - get a nice array
 - headers are jquery objects


### Usage

     $('#container').checkbox_table({
       cols: 'text' or $obj or number,
       rows: 'text' or $obj or number,
       tristate: true or false,
       set:  data[][] or function(x, y){},
       lax: true or false
     });
     // ... later
     $('#container').checkbox_table(); // returns {matrix: [][], cols: [], rows:[]}

 - lax=true will not reset data if the same number of cols and rows are given.
 - set=function(x,y){return (x===y)?1:0;} //will check diagonally
 - tristate=true will enable an indeterminate checkbox (with value of -1)
 - returned matrix or set is a 2D-array with 1...checked, 0...unchecked, -1...indeterminate

### Bower

    bower install jquery-checkbox-table

### Thanks
https://css-tricks.com/indeterminate-checkboxes/

