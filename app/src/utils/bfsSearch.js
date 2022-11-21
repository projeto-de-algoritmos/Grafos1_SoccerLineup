export default function bfsSearch(graph){
    var queue = [0]
    var players_compatibility = 0
    var visited = {}
    while(queue.length > 0){
        var currentNode = queue[0];
        queue.shift();
        for (var nextIndex = 0; nextIndex < graph[currentNode].next_pos.length; nextIndex++){
            if(!visited[`${currentNode},${graph[currentNode].next_pos[nextIndex]}`]){
                if(graph[currentNode].players.nationality === graph[graph[currentNode].next_pos[nextIndex]].players.nationality){
                    players_compatibility++;
                }
                if(graph[currentNode].players.team_name === graph[graph[currentNode].next_pos[nextIndex]].players.team_name){
                    players_compatibility++;
                }
                queue.push(graph[currentNode].next_pos[nextIndex])
                visited[`${currentNode},${graph[currentNode].next_pos[nextIndex]}`] = true
                visited[`${graph[currentNode].next_pos[nextIndex]},${currentNode}`] = true
            }
        }
    }
    return players_compatibility
}