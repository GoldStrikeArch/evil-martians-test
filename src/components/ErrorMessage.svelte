<script>
    let { errorMessage = $bindable("") } = $props();

    $effect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                errorMessage = "";
            }, 5000);

            return () => clearTimeout(timer);
        }
    });
</script>

<div role="alert" class:hidden={!errorMessage}>{errorMessage}</div>

<style>
    div {
        position: fixed;
        bottom: 1rem;
        width: auto;
        height: auto;
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: hsl(0 100 97);
        border: 1px solid hsl(0 33 90);
        color: hsl(0 29 53);
        border-radius: 5px;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 1rem;
    }

    .hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
    }
</style>
