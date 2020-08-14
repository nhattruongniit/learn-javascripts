// permission: create, update, delete, read

/*
1. Access folder: create, update, delete, read (CUDR)

// 1 = true, 0 = false
Bitwise

00001111
    CUDR

A0:  00000000 = no permision
A1:  00000001 = canRead
A2:  00000010 = canDelete
A3:  00000011 = canDeleteCanRead
A4:  00000100 = canUpdate
A5:  00000101 = canUpdateCanRead
A6:  00000110 = canUpdateCanDelete
A7:  00000111 = canUpdateCanDeleteCanRead
A8:  00001000 = canCreate
A9:  00001001 = canCreateCanRead
A10: 00001010 = canCreateCanDelete
A11: 00001011 = canCreateCanDeleteCanRead
A12: 00001100 = canCreateCanUpdate
A13: 00001101 = canCreateCanUpdateCanRead
A14: 00001110 = canCreateCanUpdateCanDelete
A15: 00001111 = full permission

1: read
2: delete
4: update
8: create
*/

/* 
operator : OR ( | )

input1: 00000001
input2: 00000010

result: 00000011
*/

/* 
operator : AND ( & )

input1: 00000111 // permision cua minh dang luu trong database
input2: 00000100 // check ban than co permission nay` hay ko (update)

result: 00000100 // co quyen update
*/

/*
Ex: myPermission = 1 | 4 | 8 = 13

Check xem tui co quyen` 2
(13 & 2) === 2

check xem tui co quyen 1
(13 & 1) === 1
*/

