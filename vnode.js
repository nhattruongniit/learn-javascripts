const input = `            h('svg', {
                attrs: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: 0
                }
            }, [
                h('ellipse', {
                    attrs: {
                        cx: 235.112,
                        cy: 227.047,
                        rx: 73.777,
                        ry: 73.777
                    },
                    style: {
                        fill: 'rgb(216, 216, 216)',
                        stroke: 'rgb(0, 0, 0)'
                    }
                }),
                h('rect', {
                    attrs: {
                        x: 139.578,
                        y: 215.881,
                        width: 21.092,
                        height: 24.814
                    },
                    style: {
                        fill: 'rgb(216, 216, 216)',
                        stroke: 'rgb(0, 0, 0)'
                    }
                }),
                h('rect', {
                    attrs: {
                        x: 308.933,
                        y: 218.983,
                        width: 21.092,
                        height: 24.194
                    },
                    style: {
                        fill: 'rgb(216, 216, 216)',
                        stroke: 'rgb(0, 0, 0)'
                    }
                }),
                h('path', {
                    attrs: {
                        d: 'M 308.313 228.701 L 185.484 173.49 L 186.724 281.431'
                    },
                    style: {
                        fill: 'rgb(216, 216, 216)',
                        stroke: 'rgb(0, 0, 0)'
                    }
                }),
                h('polyline', {
                    attrs: {
                        points: 186.724
                    },
                    style: {
                        fill: 'rgb(216, 216, 216)',
                        stroke: 'rgb(0, 0, 0)'
                    }
                })
            ])`;

const output = h('svg', {
    attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: 0
    }
}, [
    h('ellipse', {
        attrs: {
            cx: 235.112,
            cy: 227.047,
            rx: 73.777,
            ry: 73.777
        },
        style: {
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)'
        }
    }),
    h('rect', {
        attrs: {
            x: 139.578,
            y: 215.881,
            width: 21.092,
            height: 24.814
        },
        style: {
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)'
        }
    }),
    h('rect', {
        attrs: {
            x: 308.933,
            y: 218.983,
            width: 21.092,
            height: 24.194
        },
        style: {
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)'
        }
    }),
    h('path', {
        attrs: {
            d: 'M 308.313 228.701 L 185.484 173.49 L 186.724 281.431'
        },
        style: {
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)'
        }
    }),
    h('polyline', {
        attrs: {
            points: 186.724
        },
        style: {
            fill: 'rgb(216, 216, 216)',
            stroke: 'rgb(0, 0, 0)'
        }
    })
])

// how to convert input to output
const result = input.replace(/h\('svg',/g, 'h(\'svg\', {')
.replace(/attrs: {/g, 'attrs: {')
.replace(/style: {/g, 'style: {')
.replace(/}, \[/g, '}, [')
.replace(/], \[/g, '], [')
.replace(/]\)/g, '])')
.replace(/h\('ellipse'/g, 'h(\'ellipse\'')
.replace(/h\('rect'/g, 'h(\'rect\'')
.replace(/h\('path'/g, 'h(\'path\'')
.replace(/h\('polyline'/g, 'h(\'polyline\'')
.replace(/attrs: {/g, 'attrs: {')
.replace(/style: {/g, 'style: {')
.replace(/}, \[/g, '}, [')
.replace(/], \[/g, '], [')
.replace(/]\)/g, '])');
console.log(result);