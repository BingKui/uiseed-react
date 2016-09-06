import Button from './script/Button';
import ToastTip from './script/ToastTip';

var ReactUI = {
	Button:Button,
	ToastTip:ToastTip
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