const BODY = document.querySelector('body');
const KEYS = document.querySelectorAll('.keys');
const BACKSPACE = document.querySelector('.backspace');
const TAB = document.querySelector('.tab');
const SLASH = document.querySelector('.slash');
const CAPS_LOCK = document.querySelector('.caps_lock');
const ENTER = document.querySelector('.enter');
const SHIFT_LEFT = document.querySelector('.shift_left');
const SHIFT_RIGHT = document.querySelector('.shift_right');
const CTRL_LEFT = document.querySelector('.ctrl_left');
const CTRL_RIGHT = document.querySelector('.ctrl_right');
const WIN = document.querySelector('.win');
const ALT_LEFT = document.querySelector('.alt_left');
const ALT_RIGHT = document.querySelector('.alt_right');
const SPACE = document.querySelector('.space');
let INPUT = document.querySelector('.text');

KEYS.forEach(item => {
    item.setAttribute('key_name', item.innerText);
    item.setAttribute('lowerCaseName', item.innerText.toLowerCase());
})

window.addEventListener('keydown', (e) => {
    KEYS.forEach(item => {
      
        if (e.key == item.getAttribute('key_name') || e.key == item.getAttribute('lowerCaseName')) {
            item.classList.add('active')
        }
        if (e.code == 'Space') {
            SPACE.classList.add('active');
        }
        if (e.code == 'ShiftLeft') {
            SHIFT_RIGHT.classList.remove('active');
        }
        if (e.code == 'ShiftRight') {
            SHIFT_LEFT.classList.remove('active');
        }
        if (e.code == 'CapsLock') {
            CAPS_LOCK.classList.toggle('active');
        }
    })
})

window.addEventListener('keyup', (e) => {
    KEYS.forEach(item => {
        if (e.key == item.getAttribute('key_name') || e.key == item.getAttribute('lowerCaseName')) {
            item.classList.remove('active');
            item.classList.add('remove');
        }
        if (e.code == 'Space') {
            SPACE.classList.remove('active');
            SPACE.classList.add('remove');
        }
        if (e.code == 'ShiftLeft') {
            SHIFT_RIGHT.classList.remove('active');
            SHIFT_RIGHT.classList.remove('remove');
        }
        if (e.code == 'ShiftRight') {
            SHIFT_LEFT.classList.remove('active');
            SHIFT_LEFT.classList.remove('remove');
        }
        // if (e.code == 'CapsLock') {
        //    CAPS_LOCK.classList.add('active');
        //    CAPS_LOCK.classList.remove('remove')
        // }
       
        // setTimeout(()=>{
        //     item.classList.remove('remove');
        // }, 200)
    })
})

document.addEventListener('DOMContentLoaded', () => { 
    let itt = '';
KEYS.forEach(item => {
    
    
    item.addEventListener('click', (e) => {
        if (CAPS_LOCK.classList.contains('active')) {
            itt = 'key_name';
        }
        if (!CAPS_LOCK.classList.contains('active')) {
            itt = 'lowerCaseName';
        }
        if (!item.classList.contains('caps_lock') && !item.classList.contains('backspace')) {

        INPUT.value += item.getAttribute(itt);
        }
        
        item.classList.toggle('active');

        if (!item.classList.contains('caps_lock')) {
            setTimeout(()=>{
                item.classList.remove('active');
            }, 200)
        }

        if (item.classList.contains('space')) {
            INPUT.value += ' ';
        }
        if (item.classList.contains('backspace')) {
            INPUT.value = INPUT.value.slice(0, -1);
        }
      }) 
})

})