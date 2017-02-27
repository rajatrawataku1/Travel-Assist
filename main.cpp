// addon.cc
#include <node.h>
#include<iostream>
#include<fstream>
#include "as.cpp"

using namespace std;

namespace demo {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

// This is the implementation of the "add" method
// Input arguments are passed using the
// const FunctionCallbackInfo<Value>& args struct
void Add(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  // Check the number of arguments passed.
  if (args.Length() < 2) {
    // Throw an Error that is passed back to JavaScript
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  // Check the argument types
  if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong arguments")));
    return;
  }


    Graph g(15);
  g.addEdge(0, 1);
  g.addEdge(0, 8);
  
  g.addEdge(1, 9);
  g.addEdge(1, 2);
  g.addEdge(1, 0);
  
  g.addEdge(2, 3);
  g.addEdge(2, 12);
  g.addEdge(2, 10);
  g.addEdge(2, 1);
  
  g.addEdge(3, 4);
  g.addEdge(3, 2);
  
  g.addEdge(4, 5);
  g.addEdge(4, 3);
  g.addEdge(4, 12);
  
  g.addEdge(5, 4);
  g.addEdge(5, 6);
  
  g.addEdge(6, 7);
  g.addEdge(6, 13);
  
  g.addEdge(7, 14);
  g.addEdge(7, 6);
  
  g.addEdge(8, 0);
  g.addEdge(8, 9);
  g.addEdge(8, 14);
  
  g.addEdge(9, 8);
  g.addEdge(9, 10);
  g.addEdge(9, 1);
  
  g.addEdge(10, 11);
  g.addEdge(10, 9);
  g.addEdge(10, 2);
  
  g.addEdge(11, 10);
  g.addEdge(11, 12);
  
  g.addEdge(12, 2);
  g.addEdge(12, 4);
  g.addEdge(12, 13);
  g.addEdge(12, 11);
  
  g.addEdge(13, 6);
  g.addEdge(13, 14);
  g.addEdge(13, 12);
  
  g.addEdge(14, 8);
  g.addEdge(14, 7);
  g.addEdge(14, 13);

  

	outfile.open("file.txt", ios::out| ios::trunc);
	cout << "Following are all different paths from " << args [0]->NumberValue()
		<< " to " <<args [1]->NumberValue() << endl;
	
	g.printAllPaths(args [0]->NumberValue(),args[1]->NumberValue());

  outfile.close();

    //cout<<args [0]->NumberValue()<<endl;
    //cout<<args [1]->NumberValue();

   double value = args [0]->NumberValue()+args[1]->NumberValue() ;
 
  // Perform the operation
  //double source = args[0]->NumberValue() 
  //double destination=args[1]->NumberValue();

  
  Local<Number> num = Number::New(isolate, value);

  // Set the return value (using the passed in
  // FunctionCallbackInfo<Value>&)
  args.GetReturnValue().Set(num);
}

void Init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "add", Add);
}

NODE_MODULE(addon, Init)

}

int main()
{
	return 0;
}
