import React, { Component } from 'react';

class ImgItem extends Component {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el;
            this.DOM.svg = this.DOM.el.querySelector('.item__svg');
            this.DOM.path = this.DOM.svg.querySelector('path');
            this.paths = {};
            this.paths.start = this.DOM.path.getAttribute('d');
            this.paths.end = this.DOM.el.dataset.morphPath;
            this.DOM.deco = this.DOM.svg.querySelector('.item__deco');
            this.DOM.image = this.DOM.svg.querySelector('image');
            this.DOM.title = this.DOM.el.querySelector('.item__meta > .item__title');
            this.DOM.subtitle = this.DOM.el.querySelector('.item__meta > .item__subtitle');
            this.CONFIG = {
                // Defaults:
                animation: {
                    path: {
                        duration: this.DOM.el.dataset.animationPathDuration || 1500,
                        delay: this.DOM.el.dataset.animationPathDelay || 0,
                        easing: this.DOM.el.dataset.animationPathEasing || 'easeOutElastic',
                        elasticity: this.DOM.el.dataset.pathElasticity || 400,
                        scaleX: this.DOM.el.dataset.pathScalex || 1,
                        scaleY: this.DOM.el.dataset.pathScaley || 1,
                        translateX: this.DOM.el.dataset.pathTranslatex || 0,
                        translateY: this.DOM.el.dataset.pathTranslatey || 0,
                        rotate: this.DOM.el.dataset.pathRotate || 0
                    },
                    image: {
                        duration: this.DOM.el.dataset.animationImageDuration || 2000,
                        delay: this.DOM.el.dataset.animationImageDelay || 0,
                        easing: this.DOM.el.dataset.animationImageEasing || 'easeOutElastic',
                        elasticity: this.DOM.el.dataset.imageElasticity || 400,
                        scaleX: this.DOM.el.dataset.imageScalex || 1.1,
                        scaleY: this.DOM.el.dataset.imageScaley || 1.1,
                        translateX: this.DOM.el.dataset.imageTranslatex || 0,
                        translateY: this.DOM.el.dataset.imageTranslatey || 0,
                        rotate: this.DOM.el.dataset.imageRotate || 0
                    },
                    deco: {
                        duration: this.DOM.el.dataset.animationDecoDuration || 2500,
                        delay: this.DOM.el.dataset.animationDecoDelay || 0,
                        easing: this.DOM.el.dataset.animationDecoEasing || 'easeOutQuad',
                        elasticity: this.DOM.el.dataset.decoElasticity || 400,
                        scaleX: this.DOM.el.dataset.decoScalex || 0.9,
                        scaleY: this.DOM.el.dataset.decoScaley || 0.9,
                        translateX: this.DOM.el.dataset.decoTranslatex || 0,
                        translateY: this.DOM.el.dataset.decoTranslatey || 0,
                        rotate: this.DOM.el.dataset.decoRotate || 0
                    }
                }
            };
            this.initEvents();
        }
        initEvents() {
            this.mouseenterFn = () => {
                this.mouseTimeout = setTimeout(() => {
                    this.isActive = true;
                    this.animate();
                }, 75);
            }
            this.mouseleaveFn = () => {
                clearTimeout(this.mouseTimeout);
                if (this.isActive) {
                    this.isActive = false;
                    this.animate();
                }
            }
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
            this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
        }
        getAnimeObj(targetStr) {
            const target = this.DOM[targetStr];
            let animeOpts = {
                targets: target,
                duration: this.CONFIG.animation[targetStr].duration,
                delay: this.CONFIG.animation[targetStr].delay,
                easing: this.CONFIG.animation[targetStr].easing,
                elasticity: this.CONFIG.animation[targetStr].elasticity,
                scaleX: this.isActive ? this.CONFIG.animation[targetStr].scaleX : 1,
                scaleY: this.isActive ? this.CONFIG.animation[targetStr].scaleY : 1,
                translateX: this.isActive ? this.CONFIG.animation[targetStr].translateX : 0,
                translateY: this.isActive ? this.CONFIG.animation[targetStr].translateY : 0,
                rotate: this.isActive ? this.CONFIG.animation[targetStr].rotate : 0
            };
            if (targetStr === 'path') {
                animeOpts.d = this.isActive ? this.paths.end : this.paths.start;
            }
            anime.remove(target);
            return animeOpts;
        }
        animate() {
            // Animate the path, the image and deco.
            anime(this.getAnimeObj('path'));
            anime(this.getAnimeObj('image'));
            anime(this.getAnimeObj('deco'));
            // Title and Subtitle animation
            anime.remove(this.DOM.title);
            anime({
                targets: this.DOM.title,
                easing: 'easeOutQuad',
                translateY: this.isActive ? [{
                        value: '-50%',
                        duration: 200
                    },
                    {
                        value: ['50%', '0%'],
                        duration: 200
                    }
                ] : [{
                        value: '50%',
                        duration: 200
                    },
                    {
                        value: ['-50%', '0%'],
                        duration: 200
                    }
                ],
                opacity: [{
                        value: 0,
                        duration: 200
                    },
                    {
                        value: 1,
                        duration: 200
                    }
                ]
            });
            anime.remove(this.DOM.subtitle);
            anime({
                targets: this.DOM.subtitle,
                easing: 'easeOutQuad',
                translateY: this.isActive ? {
                    value: ['50%', '0%'],
                    duration: 200,
                    delay: 250
                } : {
                    value: '0%',
                    duration: 1
                },
                opacity: this.isActive ? {
                    value: [0, 1],
                    duration: 200,
                    delay: 250
                } : {
                    value: 0,
                    duration: 1
                }
            });
        
    

    const items = Array.from(document.querySelectorAll('.item'));
    const init = (() => items.forEach(item => new ImgItem(item)))();
    setTimeout(() => document.body.classList.remove('loading'), 2000);


    render() {
        return (
            <div>
                	<svg className="hidden">
			<symbol id="icon-arrow" viewBox="0 0 24 24">
				<title>arrow</title>
				<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
			</symbol>
			<symbol id="icon-drop" viewBox="0 0 24 24">
				<title>drop</title>
				<path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
			</symbol>
			<symbol id="icon-github" viewBox="0 0 32.6 31.8">
				<title>github</title>
				<path d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z"/>
			</symbol>
			<!-- All deco shapes -->
			<defs>
				<path id="deco1" d="M 161,54.69 C 230.4,4.986 303.7,8.661 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 Z" />
				<path id="deco2" d="M 119.8,69.41 C 213.5,18.01 367.2,-1.306 440.4,76.58 482.9,121.9 435.3,200.8 432.9,262.9 431.1,310.6 461.3,372.1 427.7,406 342.4,492 158.3,499.3 64.62,422.5 10.09,377.8 18.76,282.6 32.51,213.5 43.46,158.4 70.61,96.36 119.8,69.41 Z" />
				<path id="deco3" d="M 77.03,75.72 C 147.9,0.2308 309,13.37 387.6,80.44 471.8,152.4 517.2,325.6 442.9,407.5 350.2,509.8 43.77,516.2 29.67,378.8 20.48,289.3 80.25,270.4 87.78,212 93.61,166.8 45.85,108.9 77.03,75.72 Z" />
				<path id="deco4" d="M 38.35,160.1 C 74.92,86.34 178.1,44.04 260.1,51.51 348.2,59.54 441.6,126.9 473.5,209.4 499.3,276 485,371.9 431.9,419.6 348.2,494.9 185.6,517.4 95.49,449.9 16.71,390.8 -5.393,248.3 38.35,160.1 Z"/>
				<path id="deco5" d="M 49.94,386.5 C 9.795,286.4 7.674,129.7 94.72,65.99 188.4,-2.586 371.8,28.99 438.1,124.3 486.9,194.5 503.7,389.2 390.4,376.4 277.1,363.5 238.6,482 155.1,469.7 110.9,463.2 66.57,428 49.94,386.5 Z"/>
				<path id="deco6" d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z" />
				<path id="deco7" d="M 451.9,392.4 C 365.4,455.1 212.9,465.1 131.6,395.9 55.74,331.3 2.509,152.7 87.24,100.3 135.8,70.3 177.8,170.2 227.3,198.6 307.2,244.4 442.2,228.9 478.7,313.5 489.7,339 474.4,376.1 451.9,392.4 Z" />
			</defs>
		</svg>
            </div>
        );
    }
}

}
export default ImgItem;