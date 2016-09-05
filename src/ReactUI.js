import Button from './script/Button';

var ReactUI = {
	Button:Button
};

try {
    window.RUI = RUI;
}catch(e) {

}

try {
    window.global = window;
}catch(e) {

}

module.exports = ReactUI;