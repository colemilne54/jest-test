class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        const popped = this.items[this.top];
        delete this.items[this.top];
        this.top -= 1;
        return popped;
    }
}

describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('🌶');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🌶');
    });

    it('can pop off', () => {
        stack.push('🍅');
        expect(stack.pop()).toBe('🍅');
        expect(stack.top).toBe(-1);
    });
});