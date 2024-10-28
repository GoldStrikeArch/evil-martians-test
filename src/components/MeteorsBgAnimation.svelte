<script>
    let { amount = 25 } = $props();

    const styles = new Array(amount).fill(null).map(() => ({
        top: -20 + "px",
        left: Math.floor(Math.random() * 850) + "px",
        delay: Math.random() * 1 + 0.2 + "s",
        duration: Math.floor(Math.random() * 8 + 2.9) + "s",
    }));
</script>

<div class="container">
    {#each styles as style}
        <div
            style="top: {style.top}; left: {style.left}; animation-delay: {style.delay}; animation-duration: {style.duration};"
            class="meteor"
        >
            <div class="tail"></div>
        </div>
    {/each}
</div>

<style>
    :root {
        --meteor-color: hsl(215 16 47);
        --tail-color: hsl(263 78 92 / 0.8);
    }

    .container {
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: transparent;
    }

    .meteor {
        position: absolute;
        z-index: 10;
        width: 2.4px;
        height: 2.4px;
        background-color: var(--meteor-color);
        border-radius: 9999px;
        transform: rotate(215deg);
        animation: meteor 5s linear infinite;
        pointer-events: none;
    }

    .tail {
        position: absolute;
        z-index: 10;
        top: 50%;
        height: 1px;
        background-image: linear-gradient(
            to right,
            var(--meteor-color),
            var(--tail-color),
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
            transform: rotate(215deg) translateX(-400px);
            opacity: 1;
        }
    }
</style>
