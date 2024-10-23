<script>
    let a = $state(0);
    let email = $state("");
    let password = $state("");
</script>

<main>
    <form
        onsubmit={(d) => {
            console.llog(d);
        }}
    >
        <label
            >Email
            <input
                required
                aria-invalid="true"
                aria-errormessage="email-error"
                type="email"
                bind:value={email}
                autocomplete="username"
            />
        </label>
        <label
            >Password
            <input
                id="password"
                type="password"
                bind:value={password}
                autocomplete="current-password"
            />
        </label>
        Forgot your password?
        <a href="/restore">Reset it here</a>
        <button type="button" aria-label="Show password">
            <div class="eye-icon"></div></button
        >
        <button type="submit">Login</button>
    </form>
</main>

<style>
    main {
        display: flex;
        max-width: 1024px;
        min-height: 100vh;
        line-height: 1.1;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
</style>
