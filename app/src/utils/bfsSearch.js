export default function bfsSearch(graph){
    var queue = [0]

    while(queue.length > 0){
        var currentNode = queue[0];
        queue.shift();
        for (var nextIndex = 0; nextIndex < graph[currentNode].next_pos.length; nextIndex++){
            if(!graph[currentNode].visited){
                graph[currentNode].next_pos.map((node) => queue.push(node));
                graph[currentNode].visited = true;
            }
        }
        console.log(queue)
    }
}