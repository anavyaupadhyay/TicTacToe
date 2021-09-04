#include<iostream>
using namespace std;

int LinearSearch(int key, int arr[], int n){
    for(int i = 0;i < n; i++)
        if(arr[i]==key)
            return i;

    return -1;
}
int BinarySearch(int key, int arr[], int n){
    int s, e;
    if(arr[n/2]<=key){
        if(arr[n/2]==key)
            return n/2;
        s = n/2;
        e = n;
    }
    if(arr[n/2] > key){
        
        s = 0;
        e = n/2;
    }
}

int main(){
    int n, i, key, ans;
    cout<<"size of array:"<<endl;
    cin>>n;
    cout<<"Enter sorted array:"<<endl;
    int arr[n];
    for(i=0;i<n;i++)
        cin>>arr[i];
    cin>>key;
    ans=LinearSearch(key,arr,n);
    cout<<ans<<endl;
}