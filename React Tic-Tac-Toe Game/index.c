#include<stdio.h>

void fun1(int a, int b){
    int temp = a;
    a = b;
    b = temp;
}

void fun2(int *a, int *b){
    int temp = *a;
    *a= *b;
    *b = temp;
}

int main(){

int a = 1;
int b = 0;

fun1(a,b);
printf("a = %d b = %d \n",a, b);

fun2(&a,&b);
printf("a = %d b = %d \n",a, b);

    return 0;
}