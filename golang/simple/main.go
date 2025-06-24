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

	fmt.Println(add(1, 2))
	fmt.Println(sub(1, 2))
	fmt.Println(mul(1, 2))
	fmt.Println(div(1, 2))
}

func add(a int, b int) int {
	return a + b
}

func sub(a int, b int) int {
	return a - b
}

func mul(a int, b int) int {
	return a * b
}

func div(a int, b int) int {
	return a / b
}