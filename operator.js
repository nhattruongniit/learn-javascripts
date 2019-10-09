/*

1/ Numbers

- Binary operator: + , - , * , / , % -> nghĩa là phải nhập 2 value  tính toán vs nhau.

- Unary operator: typeof "x", - (10-2)  -> nghĩa là chỉ nhập 1 value

- Ternary operator: có 3 value nhập (condition operator)

--------------------------------------------------------

2/ Boolean value

- Binary operator:  > , >= , < , <= , == , !=

- Khi so sanh string vs string. 
+ Js sẽ lấy ký tự đầu tiên để so sánh. Và các ký tự uppercase luôn luôn nhỏ hơn lowercase.
+ Js sẽ so sánh string từ trái qua phải.

Vd: 
"Aard" < "Zoroa" -> true; 
"Itchy" != "Schat" -> true; 
"Apple" == "Orage" -> false;

----------------------------------------------------------------------------

3/ NaN (not a number): 

- Nó cũng là số, nhưng nó sẽ ko có các hành vi giống 1 số.
- Dùng để check biến đó không dc là số.
- Nó là 1 gía trị so sánh không bằng chính nó.

Vd:
isNaN("string") -> true;
isNaN(123) or isNaN('23') -> false;
NaN == NaN -> false

-----------------------------------------------------------------------------

4/ Logic operator

- Binary operator: || , && 

- Unary operator: ! (not)

- && : nó chỉ return true chỉ khi cả hai value được cho là true.

Vd: 
true && false -> false;
true && true -> true;

- || : nó sẽ return true nếu 1 trong 2 value cho là true.

Vd:
false || true -> true
false || false -> false

--------------------------------------------------------------------------

5/ Độ ưu tiên operator

- || có độ ưu tiên thấp nhất. 
- Kế đến là && . 
- Cuối cùng là các operatorss > , == ...

---------------------------------------------------------------------

6/ Conditional operator

true ? 1 : 2


-------------------------------------------------------------------

7/ Empty value

- Có 2 loại value đặc biệt: null or unddefined


--------------------------------------------------------------------

8/ Automatic type conversion

- Khi các so sánh 2 value # nhau. Javascript sẽ nhanh chóng chuyển các value đó thành các kiểu mà nó cần. Đó gọi là "TYPE COERCION".

Vd: 
- 8 * null  -> 0 : null sẽ luôn luôn chuyển thành số  0. Null được coi như là 1 số.

- "5" - 1 -> 4: "5" ở đây sẽ bị ép chuyển thành number. Khi xài  "-", tất cả value đều là số.

- "5" + 1 -> 51: 1 ở đây sẽ bị ép thành string. Khi xài "+", tất cả value đêu hiểu là string.

- undefined + "string" or "2": undefiend sẽ bị ép thành string or number tùy vào value dùng để  tính toàn vs nó.

- "five" * 2 -> NaN

- false == 0 -> true

- null == undefined -> true

- null == 0 -> false



*/ 