import React, { useEffect, useRef } from "react";
import { TweenLite, Circ } from "gsap";
import "./animatedbackground.css";

const AnimatedBackground = () => {
    const width = useRef(window.innerWidth);
    const height = useRef(window.innerHeight);
    const largeHeaderRef = useRef(null);
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const pointsRef = useRef([]);
    const targetRef = useRef({ x: width.current / 2, y: height.current / 2 });
    let animateHeader = true;

    useEffect(() => {
        const largeHeader = largeHeaderRef.current;
        largeHeader.style.height = `100vh`;

        const canvas = canvasRef.current;
        canvas.width = width.current;
        canvas.height = height.current;
        const ctx = canvas.getContext("2d");
        ctxRef.current = ctx;

        // create points
        const points = [];
        for (let x = 0; x < width.current; x = x + width.current / 20) {
            for (let y = 0; y < height.current; y = y + height.current / 20) {
                const px = x + (Math.random() * width.current) / 20;
                const py = y + (Math.random() * height.current) / 20;
                const p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }
        pointsRef.current = points;

        // for each point find the 5 closest points
        for (let i = 0; i < points.length; i++) {
            const closest = [];
            const p1 = points[i];
            for (let j = 0; j < points.length; j++) {
                const p2 = points[j];
                if (!(p1 === p2)) {
                    let placed = false;
                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] === undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (
                                getDistance(p1, p2) <
                                getDistance(p1, closest[k])
                            ) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for (let i in points) {
            const c = new Circle(
                points[i],
                2 + Math.random() * 2,
                "rgba(255,255,255,0.3)"
            );
            points[i].circle = c;
        }

        function mouseMove(e) {
            let posx = 0,
                posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            } else if (e.clientX || e.clientY) {
                posx =
                    e.clientX +
                    document.body.scrollLeft +
                    document.documentElement.scrollLeft;
                posy =
                    e.clientY +
                    document.body.scrollTop +
                    document.documentElement.scrollTop;
            }
            targetRef.current.x = posx;
            targetRef.current.y = posy;
        }

        function scrollCheck() {
            if (document.body.scrollTop > height.current) animateHeader = false;
            else animateHeader = true;
        }

        function resize() {
            width.current = window.innerWidth;
            height.current = window.innerHeight;
            largeHeader.style.height = `100vh`;
            canvas.width = width.current;
            canvas.height = height.current;
        }

        function animate() {
            if (animateHeader) {
                const ctx = ctxRef.current;
                ctx.clearRect(0, 0, width.current, height.current);
                const points = pointsRef.current;
                for (let i = 0; i < points.length; i++) {
                    const point = points[i];
                    // detect points in range
                    if (
                        Math.abs(getDistance(targetRef.current, point)) < 4000
                    ) {
                        point.active = 0.3;
                        point.circle.active = 0.6;
                    } else if (
                        Math.abs(getDistance(targetRef.current, point)) < 20000
                    ) {
                        point.active = 0.1;
                        point.circle.active = 0.3;
                    } else if (
                        Math.abs(getDistance(targetRef.current, point)) < 40000
                    ) {
                        point.active = 0.02;
                        point.circle.active = 0.1;
                    } else {
                        point.active = 0;
                        point.circle.active = 0;
                    }
                    drawLines(point);
                    point.circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            TweenLite.to(p, 1 + 1 * Math.random(), {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: Circ.easeInOut,
                onComplete: () => shiftPoint(p),
            });
        }

        function drawLines(p) {
            const ctx = ctxRef.current;
            if (!p.active) return;
            for (let i in p.closest) {
                const closest = p.closest[i];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(closest.x, closest.y);
                ctx.strokeStyle = `rgba(255,255,255,${p.active})`;
                ctx.stroke();
            }
        }

        function Circle(pos, rad, color) {
            const _this = this;
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
            this.draw = () => {
                const ctx = ctxRef.current;
                if (!_this.active) return;
                ctx.beginPath();
                ctx.arc(
                    _this.pos.x,
                    _this.pos.y,
                    _this.radius,
                    0,
                    2 * Math.PI,
                    false
                );
                ctx.fillStyle = `rgba(255,255,254,${_this.active})`;
                ctx.fill();
            };
        }

        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("scroll", scrollCheck);
        window.addEventListener("resize", resize);

        animate();
        for (let i in points) {
            shiftPoint(points[i]);
        }

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("scroll", scrollCheck);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="large-header" ref={largeHeaderRef}>
            <canvas id="demo-canvas" ref={canvasRef}></canvas>
        </div>
    );
};

export default AnimatedBackground;
