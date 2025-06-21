package main

import "fmt"

func change(val int){
	fmt.Println(val)
	val = 100;
	fmt.Println(val)
}


func main(){
	num := 42
	change(num)
	fmt.Println(num)
	// go func() {
	// 	fmt.Println("hello world")
	// }()
}