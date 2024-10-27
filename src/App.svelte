<script>
    import MeteorsBgAnimation from "./components/MeteorsBgAnimation.svelte";
    import { login } from "./api.ts";

    let email = $state("");
    let password = $state("");
    let isPending = $state(false);
    let showPassword = $state(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        isPending = true;
        console.log("submit");
        try {
            const res = await login(email, password);
            console.log("res is", res, res.status);
        } catch (error) {
            console.error(error);
        } finally {
            isPending = false;
        }
    };

    function togglePassword(node, showPassword) {
        return {
            update: (showPassword) => {
                if (showPassword) {
                    node.type = "text";
                } else {
                    node.type = "password";
                }
            },
        };
    }
</script>

<main>
    <MeteorsBgAnimation />
    <form onsubmit={handleSubmit}>
        <label class="field"
            >Email
            <input
                class="input"
                type="email"
                bind:value={email}
                autocomplete="username"
                required
            />
        </label>
        <label class="field"
            >Password
            <div class="password-container">
                <input
                    use:togglePassword={showPassword}
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
                    class="eye-icon"
                    aria-label={showPassword
                        ? "Hide Password"
                        : "Show Password"}
                >
                    {showPassword ? "🙈" : "👁️"}
                </button>
            </div>
        </label>
        <button
            disabled={isPending}
            aria-disabled={isPending}
            class:disabled={isPending}
            type="submit">Login</button
        >
    </form>
</main>

<style>
    main {
        display: flex;
        min-height: 100dvh;
        line-height: 1.1;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form {
        background-color: aqua;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }

    .input {
        width: 100%;
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .disabled {
        opacity: 0.5;
        /* background-color: #ccc; */
        background-color: yellow;
        color: #666;
    }

    .eye-icon {
        position: absolute;
        right: 0;
        width: 1rem;
        height: 1rem;
        background-color: #ccc;
    }

    .password-container {
        display: flex;
        gap: 0.5rem;
        position: relative;
    }
</style>
