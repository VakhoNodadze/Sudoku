Used my own algorithms.

1)Filling the matix with empty objects which has value, editable and hasConflict properties

2)Going through the matrix, randomising a number and checking   a)Does the value exist in row
                                                                b)Does the value exist in column
                                                                c)Does the value exist in subgrid

3)If none of these conditions are true, than the number can be put in the cell, if not, than we randomise another number and go to step 2

4)After filling the whole matrix, we start deleting some numbers in the subgrids dependent on the level of difficiluty


User can change the difficiluty of the game, start a new game or see the solved version

For live view visit: https://vakhonodadze.github.io/Sudoku/
