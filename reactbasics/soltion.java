
int main() {
    int n; cin >> n;
    int sz = 0;
    for (int i = 0; i < n; ++i) {
        int node;
        cin >> node;
        sz = max(sz, node + 1);
    }
    edge.resize(sz);
    visited.resize(sz, false);
    dirty.resize(sz);
    int edges; cin >> edges;
    while (edges--) {
        int u, v;
        cin >> u >> v;
        edge[v].push_back(u);
    }
    cin >> enemy >> person;
    dirty[enemy] = true;
    dfs(person, -1);
    for (int child: edge[person]) {
        if (dirty[child]) {
            cout << child << " ";
        }
    }

}