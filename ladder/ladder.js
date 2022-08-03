let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        if (this.step > 0) {
            this.step--;
        }
        return this;
    },

    show() {
        alert(this.step);
        return this.step;
    },

};
