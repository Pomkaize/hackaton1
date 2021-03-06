
const nodes = {};

['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(z => nodes[z] = {val:z})

nodes.a.left = nodes.b;
nodes.a.right = nodes.e;
nodes.b.left = nodes.c;
nodes.b.right = nodes.d;
nodes.e.left = nodes.f;
nodes.f.left = nodes.g;
nodes.f.right = nodes.h;

const stack = ['a'];

while(stack.length !== 0) {
  let currentStack = stack.slice();

  currentStack.forEach((nodeKey)=>{
    let currentNode = nodes[nodeKey];
    console.log(currentNode.val)
    /*delete from stack */
    stack.splice(stack.indexOf(currentNode.val), 1)
    /* add to stack if exists*/
    if(currentNode.left) {
      stack.push(currentNode.left.val)
    }
    if(currentNode.right) {
      stack.push(currentNode.right.val);
    }
  })
}