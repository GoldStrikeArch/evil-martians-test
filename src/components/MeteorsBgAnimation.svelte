<script>
    let { number = 15 } = $props();
    let meteorStyles = $state([]);

    let createMeteors = (num) => {
        meteorStyles = [];
        const styles = [...new Array(num)].map(() => ({
            top: -20 + "px",
            left: Math.floor(Math.random() * 700) + "px",
            delay: Math.random() * 1 + 0.2 + "s",
            duration: Math.floor(Math.random() * 8 + 2.9) + "s",
        }));
        meteorStyles = styles;
    };

    createMeteors(number);
</script>

{#each meteorStyles as style, idx}
    <div
        id="meteor-{idx + 1}"
        style="top: {style.top}; left: {style.left}; animation-delay: {style.delay}; animation-duration: {style.duration};"
        class="meteor"
    >
        <div class="tail"></div>
    </div>
{/each}

<style>
    .meteor {
        background-color: rgb(100 116 139);
        position: absolute;
        z-index: 10;
        border-radius: 9999px;
        pointer-events: none;
        width: 2.4px;
        height: 2.4px;
        transform: rotate(215deg);
        box-shadow: 0 0 0 1px #ffffff10;
        animation: meteor 5s linear infinite;
    }

    .tail {
        position: absolute;
        z-index: 10;
        top: 50%;
        height: 1px;
        background-image: linear-gradient(
            to right,
            #64748b,
            rgb(37 99 235 / 0.3),
            transparent
        );
        background-color: transparent;
        pointer-events: none;
        width: 50px;
        transform: translate(0, -50%);
    }

    @keyframes meteor {
        0% {
            transform: rotate(215deg) translateX(0);
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            transform: rotate(215deg) translateX(-500px);
            opacity: 1;
        }
    }
</style>
