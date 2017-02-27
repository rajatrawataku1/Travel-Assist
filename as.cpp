// C++ program to print all paths from a source to destination.
#include<iostream>
#include<fstream>
#include <list>
using namespace std;

fstream outfile;


// A directed graph using adjacency list representation
class Graph
{
	int V; // No. of vertices in graph
	list<int> *adj; // Pointer to an array containing adjacency lists

	// A recursive function used by printAllPaths()
	void printAllPathsUtil(int , int , bool [], int [], int &);

public:
	Graph(int V); // Constructor
	void addEdge(int u, int v);
	void printAllPaths(int s, int d);
};

Graph::Graph(int V)
{
	this->V = V;
	adj = new list<int>[V];
}

void Graph::addEdge(int u, int v)
{
	adj[u].push_back(v); // Add v to u’s list.
}

// Prints all paths from 's' to 'd'
void Graph::printAllPaths(int s, int d)
{
	// Mark all the vertices as not visited
	bool *visited = new bool[V];

	// Create an array to store paths
	int *path = new int[V];
	int path_index = 0; // Initialize path[] as empty

	// Initialize all vertices as not visited
	for (int i = 0; i < V; i++)
		visited[i] = false;

	// Call the recursive helper function to print all paths
	printAllPathsUtil(s, d, visited, path, path_index);
}

// A recursive function to print all paths from 'u' to 'd'.
// visited[] keeps track of vertices in current path.
// path[] stores actual vertices and path_index is current
// index in path[]
void Graph::printAllPathsUtil(int u, int d, bool visited[],
							int path[], int &path_index)
{
	// Mark the current node and store it in path[]




	//outfile<<"rohan\n";

	visited[u] = true;
	path[path_index] = u;
	path_index++;

  //  char ch,ch1;
   // int d1;
	// If current vertex is same as destination, then print
	// current path[]
	if (u == d)
	{

        //outfile.open("file.txt", ios::out| ios::app);

		for (int i = 0; i<path_index-1; i++)
			{
			    //string ch;
			    //ch=path[i];
			    char ch=path[i]+65;
			    char ch1=path[i+1]+65;

                outfile << ch <<ch1<<" ";
				//cout << path[i] << " ";

			}
		//cout << endl;
		outfile<<endl;
	}
	else // If current vertex is not destination
	{
		// Recur for all the vertices adjacent to current vertex
		list<int>::iterator i;
		for (i = adj[u].begin(); i != adj[u].end(); ++i)
			if (!visited[*i])
				printAllPathsUtil(*i, d, visited, path, path_index);
	}

	// Remove current vertex from path[] and mark it as unvisited
	path_index--;
	visited[u] = false;

	
}


 