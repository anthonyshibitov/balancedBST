import Node from "./Node.js";

export default class Tree {
    root = null;

    buildTreeMaster(inputs) {
        //let array = buildTreePreProcess(inputs);
        this.root = this.buildTree(inputs, 0, inputs.length);
        //inputs is an array!
        //sort it
        //remove dups
    }

    buildTreePreprocess(inputs) {
        //sort it
        //remove dups
    }

    buildTree(inputs, start, end) {
        if (start > end) return null;
        let mid = start + end / 2;

        let root = new Node(inputs[mid]);

        root.left = this.buildTree(inputs, start, mid - 1);
        root.right = this.buildTree(inputs, mid + 1, end);

        return root;
    }

    printMaster() {
        this.print(root);
    }

    print(root) {}
}
