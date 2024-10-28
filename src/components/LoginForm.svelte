<script>
    let {
        email = $bindable(""),
        password = $bindable(""),
        isPending = $bindable(false),
        reset = () => {},
        onsubmit = () => {},
    } = $props();

    let showPassword = $state(false);

    const toggleShowPasswordAction = (node, showPassword) => {
        return {
            update: (showPassword) => {
                showPassword ? (node.type = "text") : (node.type = "password");
            },
        };
    };
</script>

<form {onsubmit}>
    <h2>Welcome Back!</h2>
    <div class="field">
        <label class="label" for="email">Email</label>
        <input
            bind:value={email}
            class="input"
            id="email"
            type="email"
            autocomplete="username"
            required
        />
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <div class="password-container">
            <input
                use:toggleShowPasswordAction={showPassword}
                bind:value={password}
                class="input"
                id="password"
                type="password"
                autocomplete="current-password"
                required
            />
            <button
                onclick={() => {
                    showPassword = !showPassword;
                }}
                type="button"
                class="toggle-password-button"
                aria-label={showPassword ? "Hide Password" : "Show Password"}
            >
                {showPassword ? "🙈" : "👁️"}
            </button>
        </div>
    </div>
    <button
        class="login-button"
        disabled={isPending}
        aria-disabled={isPending}
        class:disabled={isPending}
        type="submit">{"Login"}</button
    >
</form>

<style>
    form {
        background-color: hsla(0, 0%, 0%, 0.3);
        backdrop-filter: blur(30px);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        border-radius: 8px;
        padding: 2rem;
        animation: fadeIn 0.5s ease-in;
    }

    .input {
        width: 100%;
        background-color: hsla(0, 0%, 100%, 0.2);
        color: hsl(0 0 100);
        border: none;
        border-radius: 4px;
        padding: 0.25rem 0;
        font-size: 1rem;
    }

    .label {
        color: hsl(0 0 100);
    }

    .field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5rem;
    }
    .disabled {
        opacity: 0.5;
        background-color: hsl(0 0 40);
        color: hsl(0, 0 40);
        cursor: not-allowed;
    }

    .toggle-password-button {
        position: absolute;
        right: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        background-color: transparent;
    }

    .password-container {
        display: flex;
        position: relative;
        width: 100%;
    }

    .login-button {
        width: 100%;
        padding: 0.25rem 0;
        border: none;
        border-radius: 4px;
        background-color: hsl(216 85 34);
        color: hsl(0 0 100);
        font-size: 1.1rem;
        transition: background 0.3s;
    }

    .login-button:hover {
        background-color: hsl(208 79 51);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
