
function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 0;
    this.isEmpty = function () { return this.stackControl.length === 0; };
}

StackDataStructure.prototype.canPush = function () {
    return this.isEmpty();
};

StackDataStructure.prototype.push = function (element) {
    if (this.canPush()) {
        if (this.stackControl.length === this.MAX_SIZE && this.MAX_SIZE != 0) {
            return "Stack Overflow";
        }
        this.stackControl.push(element);
        return this.stackControl;
    }
};
StackDataStructure.prototype.pop = function () {
    if (this.stackControl.length === 0) {
        return "Stack Underflow";
    }
    //var popped = this.stackControl.length;
    return this.stackControl.pop();
};
