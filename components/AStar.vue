<template>
    <div>
        <svg class="star" 
            :class="speed"
            :width="w" 
            :height="h" 
            viewBox="0 0 138 132" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon 
                    :fill="color" 
                    points="69 108.75 26.6794618 131.153732 34.7619654 83.701866 0.523930827 50.0962679 47.8397309 43.173134 69 0 90.1602691 43.173134 137.476069 50.0962679 103.238035 83.701866 111.320538 131.153732">
                </polygon>
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        props:[
            'color',
            'h',
            'w',
            'speed'
        ],
        computed:{
            speedClass(){
                return this.speed;
            }
        }
    }
</script>

<style scoped>

@keyframes fall {
    0% {
        opacity:100%;
        transform: translateY(-300px);
    }

    20% {
        opactiy:0%;
    }

    100%  {
        transform: translateY(1000px);
    }
}


.fast {
    animation: 12s fall;
}

.medium {
    animation: 18s fall;
}

.slow {
    animation: 24s fall;
}

.star {
    z-index:0;
    animation-iteration-count:infinite;
    animation-timing-function: linear;
}

</style>