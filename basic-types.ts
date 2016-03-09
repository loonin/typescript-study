var isDone: boolean = false;
var height: number = 6;
var name: string = "bob";
name = 'smith';
var list1:number[] = [1, 2, 3];
var list:Array<number> = [1, 2, 3];
enum Color {Red, Green, Blue};
var c: Color = Color.Green;
enum Color1 {Red = 1, Green, Blue};
var c1: Color1 = Color1.Green;
enum Color2 {Red = 1, Green = 2, Blue = 4};
var c2: Color2 = Color2.Green;

var colorName: string = Color1[3];

alert(colorName);

var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

var list2:any[] = [1, true, "free"];
list2[1] = 100;

function warnUser(): void {
    alert("This is my warning message");
}