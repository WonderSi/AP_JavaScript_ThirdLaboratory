function Browser(name, version) {
    this.name = name;
    this.version = version;
    this.aboutBrowser = function () {
        console.log(`Browser: ${this.name}, version: ${version}`)
    }
}

myBrowser = new Browser("Microsoft Internet Explorer", "9.0");
console.log(myBrowser);
myBrowser.aboutBrowser();
