var myObject = {
  name: "bar",
  foo: function () {
    var self = this;
    console.log(this.name);
    console.log(self.name);
    function koo() {
      console.log(this.name);
      console.log(self.name);
    }
    koo();
  },
};
myObject.foo();
