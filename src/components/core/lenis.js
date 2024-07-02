import Lenis from '@studio-freight/lenis';

let lenis;

function initLenis() {
    console.log('init lenis')
    lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}

function getLenis() {
    if (!lenis) {
        initLenis ()
    }
    return lenis;
}

export {initLenis, getLenis}